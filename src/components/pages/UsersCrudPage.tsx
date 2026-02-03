import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { MainTemplate } from "../templates";
import { Input } from "../atoms/Input";

type UserRole = "Admin" | "Editor" | "Viewer";
type UserStatus = "Active" | "Inactive";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

type FormValues = {
  name: string;
  email: string;
  role: "" | UserRole;
  status: "" | UserStatus;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type ChipColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

const initialFormValues: FormValues = {
  name: "",
  email: "",
  role: "",
  status: "",
};

const roleOptions: UserRole[] = ["Admin", "Editor", "Viewer"];
const statusOptions: UserStatus[] = ["Active", "Inactive"];

const roleColors: Record<UserRole, ChipColor> = {
  Admin: "secondary",
  Editor: "primary",
  Viewer: "default",
};

const statusColors: Record<UserStatus, ChipColor> = {
  Active: "success",
  Inactive: "warning",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function UsersCrudPage() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [users, setUsers] = useState<User[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleFieldChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormValues((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSelectChange =
    (field: "role" | "status") => (event: SelectChangeEvent<string>) => {
      const { value } = event.target;
      setFormValues((prev) => ({
        ...prev,
        [field]: value as FormValues[typeof field],
      }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validate = (values: FormValues) => {
    const nextErrors: FormErrors = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();

    if (trimmedName.length < 3) {
      nextErrors.name = "Name must be at least 3 characters.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!values.role) {
      nextErrors.role = "Role is required.";
    }

    if (!values.status) {
      nextErrors.status = "Status is required.";
    }

    return nextErrors;
  };

  const resetForm = () => {
    setFormValues(initialFormValues);
    setErrors({});
    setEditingId(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formValues);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const normalizedUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role as UserRole,
      status: formValues.status as UserStatus,
    };

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...normalizedUser } : user,
        ),
      );
      resetForm();
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        ...normalizedUser,
      },
    ]);
    resetForm();
  };

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setFormValues({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    setErrors({});
  };

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  const nameHelperText = errors.name || "Minimum 3 characters.";
  const emailHelperText = errors.email || "example@domain.com";

  return (
    <MainTemplate>
      <Stack spacing={3}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
          }}>
          <CardContent>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant='h4' sx={{ fontWeight: 700 }}>
                  User CRUD
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Create, update, and manage users in a simple table.
                </Typography>
              </Box>
              <Box component='form' onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Input
                      name='name'
                      label='Name'
                      value={formValues.name}
                      onChange={handleFieldChange("name")}
                      error={Boolean(errors.name)}
                      helperText={nameHelperText}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      name='email'
                      label='Email'
                      value={formValues.email}
                      onChange={handleFieldChange("email")}
                      error={Boolean(errors.email)}
                      helperText={emailHelperText}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      fullWidth
                      size='small'
                      label='Role'
                      name='role'
                      value={formValues.role}
                      // onChange={handleSelectChange("role")}
                      error={Boolean(errors.role)}
                      helperText={errors.role}
                      required>
                      <MenuItem value=''>Select role</MenuItem>
                      {roleOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      fullWidth
                      size='small'
                      label='Status'
                      name='status'
                      value={formValues.status}
                      // onChange={handleSelectChange("status")}
                      error={Boolean(errors.status)}
                      helperText={errors.status}
                      required>
                      <MenuItem value=''>Select status</MenuItem>
                      {statusOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}>
                    <Stack direction='row' spacing={1}>
                      {editingId && (
                        <Button variant='text' onClick={resetForm}>
                          Cancel
                        </Button>
                      )}
                      <Button variant='contained' color='primary' type='submit'>
                        {editingId ? "Update User" : "Add User"}
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant='h5' sx={{ fontWeight: 600 }}>
                Users
              </Typography>
              <TableContainer component={Paper} variant='outlined'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align='right'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align='center'>
                          <Typography variant='body2' color='text.secondary'>
                            No users yet. Add one above.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      users.map((user) => (
                        <TableRow key={user.id} hover>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Chip
                              size='small'
                              label={user.role}
                              color={roleColors[user.role]}
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              size='small'
                              label={user.status}
                              color={statusColors[user.status]}
                            />
                          </TableCell>
                          <TableCell align='right'>
                            <Stack
                              direction='row'
                              spacing={1}
                              justifyContent='flex-end'>
                              <Button
                                color='primary'
                                variant='outlined'
                                size='small'
                                onClick={() => handleEdit(user)}>
                                Edit
                              </Button>
                              <Button
                                color='error'
                                variant='outlined'
                                size='small'
                                onClick={() => handleDelete(user.id)}>
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </MainTemplate>
  );
}

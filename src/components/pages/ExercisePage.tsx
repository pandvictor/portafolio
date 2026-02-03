// Exercise: Task Manager with Priority and Deadlines
// Objective:
// Create a form to add new tasks. The form should include fields for:
// •	Title
// •	Description
// •	Priority (Low, Medium, High — dropdown)
// •	Due Date (date picker)
// ---
//  Validation Rules:
// •	Title must be at least 5 characters long
// •	Description must not exceed 100 characters
// •	Due Date must be in the future
// ---
// Task Table Requirements:
// •	Display all tasks in a table format.
// •	Each row should show:
// o	Title
// o	Description
// o	Priority
// o	Due Date
// •	Add a color-coded badge for priority:
// o	Low → green
// o	Medium → orange
// o	High → red
// •	Include a "Delete" button in each row to remove the task.

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

type Priority = "Low" | "Medium" | "High";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
};

type FormValues = {
  title: string;
  description: string;
  priority: "" | Priority;
  dueDate: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialFormValues: FormValues = {
  title: "",
  description: "",
  priority: "",
  dueDate: "",
};

const priorityOptions: Priority[] = ["Low", "Medium", "High"];

const priorityColors: Record<Priority, "success" | "warning" | "error"> = {
  Low: "success",
  Medium: "warning",
  High: "error",
};

const isFutureDate = (value: string) => {
  if (!value) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(`${value}T00:00:00`);
  return dueDate.getTime() > today.getTime();
};

export function ExercisePage() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFieldChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormValues((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handlePriorityChange = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;
    setFormValues((prev) => ({ ...prev, priority: value as Priority }));
    if (errors.priority) {
      setErrors((prev) => ({ ...prev, priority: undefined }));
    }
  };

  const validate = (values: FormValues) => {
    const nextErrors: FormErrors = {};
    const trimmedTitle = values.title.trim();
    const trimmedDescription = values.description.trim();

    if (trimmedTitle.length < 5) {
      nextErrors.title = "Title must be at least 5 characters long.";
    }

    if (trimmedDescription.length > 100) {
      nextErrors.description = "Description must not exceed 100 characters.";
    }

    if (!values.priority) {
      nextErrors.priority = "Priority is required.";
    }

    if (!values.dueDate) {
      nextErrors.dueDate = "Due date is required.";
    } else if (!isFutureDate(values.dueDate)) {
      nextErrors.dueDate = "Due date must be in the future.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formValues);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setTasks((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: formValues.title.trim(),
        description: formValues.description.trim(),
        priority: formValues.priority as Priority,
        dueDate: formValues.dueDate,
      },
    ]);
    setFormValues(initialFormValues);
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const descriptionHelperText =
    errors.description ||
    (formValues.description
      ? `${formValues.description.length}/100 characters`
      : "Max 100 characters.");

  return (
    <MainTemplate>
      <Stack spacing={3}>
        <Card sx={{ borderRadius: 3, boxShadow: "0 18px 40px rgba(15,23,42,0.08)" }}>
          <CardContent>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant='h4' sx={{ fontWeight: 700 }}>
                  Task Manager
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Add tasks with priorities and future deadlines.
                </Typography>
              </Box>
              <Box component='form' onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Input
                      name='title'
                      label='Title'
                      value={formValues.title}
                      onChange={handleFieldChange("title")}
                      error={Boolean(errors.title)}
                      helperText={errors.title}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      fullWidth
                      size='small'
                      label='Priority'
                      name='priority'
                      value={formValues.priority}
                      SelectProps={{ onChange: handlePriorityChange }}
                      error={Boolean(errors.priority)}
                      helperText={errors.priority}
                      required>
                      <MenuItem value=''>Select priority</MenuItem>
                      {priorityOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name='description'
                      label='Description'
                      value={formValues.description}
                      onChange={handleFieldChange("description")}
                      error={Boolean(errors.description)}
                      helperText={descriptionHelperText}
                      multiline
                      minRows={3}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      name='dueDate'
                      label='Due Date'
                      type='date'
                      value={formValues.dueDate}
                      onChange={handleFieldChange("dueDate")}
                      error={Boolean(errors.dueDate)}
                      helperText={errors.dueDate}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: { xs: "flex-start", md: "flex-end" },
                    }}>
                    <Button variant='contained' color='primary' type='submit'>
                      Add Task
                    </Button>
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
                Tasks
              </Typography>
              <TableContainer component={Paper} variant='outlined'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell align='right'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tasks.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align='center'>
                          <Typography variant='body2' color='text.secondary'>
                            No tasks yet. Add one above.
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      tasks.map((task) => (
                        <TableRow key={task.id} hover>
                          <TableCell>{task.title}</TableCell>
                          <TableCell>{task.description}</TableCell>
                          <TableCell>
                            <Chip
                              size='small'
                              label={task.priority}
                              color={priorityColors[task.priority]}
                            />
                          </TableCell>
                          <TableCell>{task.dueDate}</TableCell>
                          <TableCell align='right'>
                            <Button
                              color='error'
                              variant='outlined'
                              size='small'
                              onClick={() => handleDelete(task.id)}>
                              Delete
                            </Button>
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

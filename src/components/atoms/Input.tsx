import React from "react";
import { TextField } from "@mui/material";

type InputProp = {
  type?: "number" | "text" | "date";
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  minRows?: number;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  required?: boolean;
};

export const Input = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  multiline,
  minRows,
  inputProps,
  required,
}: InputProp) => (
  <TextField
    fullWidth
    size='small'
    variant='outlined'
    type={type}
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={helperText}
    multiline={multiline}
    minRows={minRows}
    inputProps={inputProps}
    required={required}
    InputLabelProps={type === "date" ? { shrink: true } : undefined}
  />
);

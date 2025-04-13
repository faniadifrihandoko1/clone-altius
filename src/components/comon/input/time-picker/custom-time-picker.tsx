"use client";

import { Box, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomTimePickerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  format?: string; // Menambahkan format waktu
  ampm?: boolean; // Menentukan mode 12/24 jam
}

export function CustomTimePicker<T extends FieldValues>({
  control,
  name,
  label,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = "Pilih waktu...",
  format = "HH:mm",
  //   ampm = false,
}: CustomTimePickerProps<T>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      {/* Label */}
      <Typography fontWeight={600}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      {/* Time Picker */}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const error = Boolean(fieldState?.error);
          const helperText = fieldState?.error?.message;

          return (
            <TimePicker
              value={field.value ? dayjs(field.value) : null}
              onChange={(newValue) => field.onChange(newValue?.toISOString())}
              disabled={disabled}
              ampm={false} // Mode 24 jam secara default
              format={format}
              slotProps={{
                textField: {
                  error,
                  helperText,
                  size: "small",
                  placeholder,
                  fullWidth: true,
                  InputProps: { readOnly, sx: { fontSize: 14 } },
                },
              }}
            />
          );
        }}
      />
    </Box>
  );
}

// Cara Penggunaan
/*
import { useForm } from "react-hook-form";
import { CustomTimePicker } from "./CustomTimePicker";

interface FormValues {
  start_time: string;
}

export function ExampleForm() {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTimePicker
        control={control}
        name="start_time"
        label="Jam Mulai"
        required
        ampm={false} // Mode 24 jam
      />
      <button type="submit">Submit</button>
    </form>
  );
}
*/

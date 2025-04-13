"use client";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface StaticRadioGroupProps<Form extends FieldValues> {
  control: Control<Form>;
  name: Path<Form>;
  label: string;
  options: { value: string | number; label: string }[];
  row?: boolean;
  required?: boolean;
}

export function StaticRadioGroup<Form extends FieldValues>(
  props: StaticRadioGroupProps<Form>
) {
  const {
    control,
    name,
    label,
    options,
    row = false,
    required = false,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={Boolean(fieldState?.error)}>
          <FormLabel>
            <Typography fontWeight={600} fontSize={14} gutterBottom>
              {label}{" "}
              {required && (
                <span style={{ color: "red", marginLeft: 2 }}>*</span>
              )}
            </Typography>
          </FormLabel>
          <RadioGroup {...field} row={row}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}

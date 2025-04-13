"use client"

import { MenuItem, TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";

interface CustomTimePickerProps
  extends Omit<TextFieldProps, "onChange" | "value"> {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min_hour?: number;
  max_hour?: number;
  max_minute?: number;
}

const CustomTimePickerMui: React.FC<CustomTimePickerProps> = ({
  id,
  label,
  value,
  onChange,
  InputLabelProps,
  inputProps,
  min_hour = 6,
  max_hour = 24,
  max_minute = 0,
  ...rest
}) => {
  const generateTimeOptions = () => {
    const times: string[] = [];

    for (let hour = min_hour; hour <= max_hour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        if (hour === max_hour && minute === max_minute) {
          times.push(`${formattedHour}:${formattedMinute}`);
          break;
        }
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }

    return times?.length > 0 ? times : ["No Options"];
  };

  return (
    <TextField
      select
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      InputLabelProps={InputLabelProps}
      inputProps={inputProps}
      SelectProps={{
        displayEmpty: true,
        MenuProps: {
          PaperProps: {
            sx: {
              maxHeight: 300,
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
              },
            },
          },
        },
        renderValue: (selected: any) => {
          if (!selected) {
            return (
              <p className="text-xs font-medium text-nt-9">Pilih Jam...</p>
            );
          }

          return selected;
        },
      }}
      {...rest}
    >
      {generateTimeOptions().map((option, index) =>
        option === "No Options" ? (
          <Typography
            key={index}
            fontSize={14}
            sx={{ padding: "8px 16px", opacity: 0.5 }}
          >
            {option}
          </Typography>
        ) : (
          <MenuItem key={index} value={option} sx={{ padding: "8px 16px" }}>
            {option}
          </MenuItem>
        )
      )}
    </TextField>
  );
};

export default CustomTimePickerMui;

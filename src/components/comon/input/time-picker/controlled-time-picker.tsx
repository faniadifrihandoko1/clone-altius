"use client"

import { Box, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import CustomTimePickerMui from ".";

interface ControlledTimePickerProps {
  name: string;
  control: any;
  label: string;
  setValueInformation: (name: string, value: string) => void;
  clearErrors: (name: string) => void;
  min_hour?: number;
  max_hour?: number;
  max_minute?: number;
}

export  function  ControlledTimePicker({
  name,
  control,
  label,
  setValueInformation,
  clearErrors,
  min_hour,
  max_hour,
  max_minute,
}: ControlledTimePickerProps)  {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box>
          <Typography mb={1}>{label}</Typography>
          <CustomTimePickerMui
            fullWidth
            id={name}
            label=""
            value={field.value ?? ""}
            onChange={(event) => {
              const { value } = event.target;
              setValueInformation(name, value);
              setValueInformation("end_time", "");
              clearErrors(name);
            }}
            min_hour={min_hour}
            max_hour={max_hour}
            max_minute={max_minute}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      )}
    />
  );
};


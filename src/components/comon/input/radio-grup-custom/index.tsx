import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Typography,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Option = {
  label: string;
  value: string | boolean | number;
};

interface CustomRadioGroupProps<T extends FieldValues> extends RadioGroupProps {
  name: Path<T>;
  label?: string;
  options: Option[];
  control: Control<T>;
  labelFontSize?: number;
  labelFontWeight?: number;
  radioGap?: number | string;
}

export const CustomRadioGroup = <T extends FieldValues>({
  name,
  label,
  options,
  control,
  labelFontSize = 13,
  labelFontWeight = 600,
  row = false,
  radioGap = 1,
  ...radioGroupProps
}: CustomRadioGroupProps<T>) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      {label && (
        <Typography fontWeight={labelFontWeight} fontSize={labelFontSize}>
          {label}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            row={row}
            {...radioGroupProps}
            sx={{
              display: "flex",
              flexDirection: row ? "row" : "column",
              gap: radioGap,
              ...radioGroupProps.sx,
            }}
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </Box>
  );
};

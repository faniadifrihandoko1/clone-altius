"use client";

import { GeneralOption } from "@/types/general-type";
import { Typography } from "@mui/material";
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import MuiTextField from "@mui/material/TextField";
import { useTranslations } from "next-intl";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";

interface StaticAutoCompleteProps<Form extends FieldValues, Option>
  extends Omit<
    MuiAutocompleteProps<Option, boolean, boolean, boolean>,
    "name" | "renderInput"
  > {
  control: Control<Form>;
  name: Path<Form>;
  label: string;
  onValueChange?: MuiAutocompleteProps<
    Option,
    boolean,
    boolean,
    boolean
  >["onChange"];
  variant?: "outlined" | "filled" | "standard";
  readOnly?: boolean;
  // placeholder?: string;
  required?: boolean;
}

export function StaticAutoComplete<
  Form extends FieldValues,
  Option = GeneralOption,
>(props: StaticAutoCompleteProps<Form, Option>) {
  const {
    control,
    label,
    name,
    onValueChange,
    variant = "outlined",
    readOnly = false,
    required = false,
    ...muiAutoCompleteProps
  } = props;

  const t = useTranslations("comon");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, ...moreField } = field;

        const error = Boolean(fieldState?.error);
        // const helperText = fieldState?.error?.message;

        return (
          <div>
            <Typography fontWeight={600} fontSize={13} gutterBottom>
              {label}
              {required && (
                <span style={{ color: "red", marginLeft: 1 }}>*</span>
              )}
            </Typography>
            <MuiAutocomplete<Option, boolean, boolean, boolean>
              {...moreField}
              {...muiAutoCompleteProps}
              style={{ fontSize: 14 }}
              size="small"
              readOnly={readOnly}
              forcePopupIcon={!readOnly}
              onChange={(e, value, ...restEvent) => {
                if (onValueChange) {
                  onValueChange(e, value, ...restEvent);
                }

                onChange(
                  value as unknown as
                    | React.ChangeEvent<Element>
                    | PathValue<Form, Path<Form>>
                );
              }}
              componentsProps={{
                popper: {
                  sx: {
                    zIndex: 10000,
                    backgroundColor: "#fff",
                    fontSize: 14,
                  },
                },
                paper: {
                  sx: {
                    fontSize: 14,
                  },
                },
              }}
              renderInput={(params) => (
                <MuiTextField
                  {...params}
                  // label={props.label}
                  error={error}
                  helperText={error && t("validation.required")}
                  variant={variant}
                  InputLabelProps={{ shrink: true }}
                  placeholder={
                    readOnly ? undefined : t("autocomplete.placeholder")
                  }
                />
              )}
            />
          </div>
        );
      }}
    />
  );
}

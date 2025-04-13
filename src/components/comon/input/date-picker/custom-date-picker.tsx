// "use client";

// import { TextField, TextFieldProps, Typography } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { useTranslations } from "next-intl";
// import { Control, Controller, FieldValues, Path } from "react-hook-form";

// interface CustomDatePickerProps<Form extends FieldValues> {
//   control: Control<Form>;
//   name: Path<Form>;
//   label: string;
//   variant?: "outlined" | "filled" | "standard";
//   readOnly?: boolean;
//   required?: boolean;
// }

// export function CustomDatePicker<Form extends FieldValues>(
//   props: CustomDatePickerProps<Form>
// ) {
//   const {
//     control,
//     name,
//     label,
//     variant = "outlined",
//     readOnly = false,
//     required = false,
//   } = props;

//   const t = useTranslations("comon");

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={{ required: required ? t("validation.required") : false }}
//       render={({ field, fieldState }) => {
//         const error = Boolean(fieldState?.error);
//         const helperText = fieldState?.error?.message;

//         return (
//           <div>
//             <Typography fontWeight={600} fontSize={13} gutterBottom>
//               {label}
//               {required && (
//                 <span style={{ color: "red", marginLeft: 1 }}>*</span>
//               )}
//             </Typography>
//             <DatePicker
//               {...field}
//               value={field.value ? dayjs(field.value) : null}
//               onChange={(date) =>
//                 field.onChange(date ? date.toISOString() : "")
//               }
//               readOnly={readOnly}
//               slotProps={{
//                 textField: {
//                   variant,
//                   error,
//                   helperText,
//                   renderInput: (params: TextFieldProps) => (
//                     <TextField {...params} />
//                   ),
//                 } as any,
//               }}
//               sx={{ "& .MuiInputBase-root": { height: 36 } }} // Mengecilkan DatePicker
//             />
//           </div>
//         );
//       }}
//     />
//   );
// }

"use client";

import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomDatePickerProps<Form extends FieldValues> {
  control: Control<Form>;
  name: Path<Form>;
  label: string;
  variant?: "outlined" | "filled" | "standard";
  readOnly?: boolean;
  required?: boolean;
}

export function CustomDatePicker<Form extends FieldValues>(
  props: CustomDatePickerProps<Form>
) {
  const {
    control,
    name,
    label,
    variant = "outlined",
    readOnly = false,
    required = false,
  } = props;

  const t = useTranslations("comon");

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? t("validation.required") : false }}
      render={({ field, fieldState }) => {
        const error = Boolean(fieldState?.error);
        const helperText = fieldState?.error?.message;

        return (
          <div>
            <Typography fontWeight={600} fontSize={13} gutterBottom>
              {label}
              {required && (
                <span style={{ color: "red", marginLeft: 1 }}>*</span>
              )}
            </Typography>
            <DatePicker
              {...field}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) =>
                field.onChange(date ? date.toISOString() : "")
              }
              readOnly={readOnly}
              slotProps={{
                textField: {
                  variant,
                  error,
                  helperText,
                  size: "small", // Mengecilkan ukuran input
                } as any,
              }}
            />
          </div>
        );
      }}
    />
  );
}

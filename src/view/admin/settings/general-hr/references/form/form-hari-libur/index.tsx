"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import {
  Checkbox,
  FormControlLabel,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { UseFormReturn } from "react-hook-form";
import { HariLiburFormValues } from "../../schema/schema-hari-libur";

interface Props {
  form: UseFormReturn<HariLiburFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormHariLibur = ({ form }: Props) => {
  const { control, setValue, watch } = form;

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <CustomTextField
            label="Nama"
            required
            control={control}
            name="name"
            type="text"
          />
        </Grid>
        <Grid
          size={12}
          sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
        >
          <Typography fontWeight={600}>
            Tanggal <span style={{ color: "red" }}>*</span>
          </Typography>
          <DatePicker
            sx={{ backgroundColor: "white", borderRadius: 1 }}
            value={watch("date") ? dayjs(watch("date")) : null}
            format="DD MMMM YYYY"
            onChange={(newValue) => {
              const date = newValue ? dayjs(newValue).toDate() : null;
              if (date !== null) {
                setValue("date", date);
              }
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                size: "small",

                InputProps: {
                  readOnly: true,
                },
              },
            }}
          />
        </Grid>
        <Grid size={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={watch("isCutiBersama") || false}
                onChange={(e) => setValue("isCutiBersama", e.target.checked)}
              />
            }
            label="Sebagai Cuti Bersama?"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormHariLibur;

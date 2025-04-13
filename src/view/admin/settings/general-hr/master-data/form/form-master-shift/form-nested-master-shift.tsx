"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { CustomTimePicker } from "@/components/comon/input/time-picker/custom-time-picker";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { nestedMasterShiftFormValues } from "../../schema/schema-master-shift";

interface Props {
  form: UseFormReturn<nestedMasterShiftFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormNestedMasterShift = ({ form }: Props) => {
  const { control } = form;

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <CustomTextField label="Name" control={control} name="day" required />
        </Grid>
        <Grid size={12}>
          <CustomTimePicker
            control={control}
            name="in_time"
            label="Jam Mulai"
            required
            ampm={false}
          />
        </Grid>
        <Grid size={12}>
          <CustomTimePicker
            control={control}
            name="out_time"
            label="Jam Mulai"
            required
            ampm={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormNestedMasterShift;

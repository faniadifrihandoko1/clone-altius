"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { masterShiftFormValues } from "../../schema/schema-master-shift";

interface Props {
  form: UseFormReturn<masterShiftFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormMasterShift = ({ form }: Props) => {
  const { control } = form;

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <CustomTextField
            label="Name"
            control={control}
            name="name"
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormMasterShift;

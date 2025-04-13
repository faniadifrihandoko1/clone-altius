"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { jenisCutiFormValues } from "../../schema/schema-jenis-cuti";

interface Props {
  form: UseFormReturn<jenisCutiFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormJenisCuti = ({ form }: Props) => {
  const { control } = form;

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
        <Grid size={12}>
          <CustomTextField
            label="Kuota (Hari)"
            placeholder="0 Hari"
            control={control}
            name="kuota"
            type="number"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormJenisCuti;

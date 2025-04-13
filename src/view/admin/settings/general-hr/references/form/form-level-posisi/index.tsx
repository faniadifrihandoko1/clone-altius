"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { levelPosisiFormValues } from "../../schema/schema-level-posisi";

interface Props {
  form: UseFormReturn<levelPosisiFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormLevelPosisi = ({ form }: Props) => {
  const { control } = form;

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label="Nama"
            required
            control={control}
            name="name"
            type="text"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormLevelPosisi;

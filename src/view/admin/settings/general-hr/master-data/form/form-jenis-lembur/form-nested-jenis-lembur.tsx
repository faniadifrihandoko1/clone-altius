"use client"
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { nestedJenisLemburFormValue } from "../../schema/schema-jenis-lembur";

interface Props {
  form: UseFormReturn<nestedJenisLemburFormValue>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormNestedJenisLembur = ({ form }: Props) => {
  const { control } = form;

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <CustomTextField
            label="Menit mulai"
            control={control}
            name="start_minute"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="Menit selesai"
            control={control}
            name="end_minute"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="Nilai"
            placeholder="0"
            control={control}
            name="value"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="Keterangan"
            control={control}
            name="keterangan"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormNestedJenisLembur;

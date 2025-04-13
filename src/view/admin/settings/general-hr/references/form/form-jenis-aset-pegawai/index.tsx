"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { JenisAsetPegawaiFormValues } from "../../schema/schema-jenis-aset-pegawai";

interface Props {
  form: UseFormReturn<JenisAsetPegawaiFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormJenisAsetPegawai = ({ form }: Props) => {
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

export default FormJenisAsetPegawai;

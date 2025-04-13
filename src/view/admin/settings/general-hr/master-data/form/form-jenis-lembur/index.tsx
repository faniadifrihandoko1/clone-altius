"use client";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { jenisLemburFormValues } from "../../schema/schema-jenis-lembur";

interface Props {
  form: UseFormReturn<jenisLemburFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const Jabatan: { id: number; label: string }[] = [
  { id: 1, label: "Manager" },
  { id: 2, label: "Direktur" },
  { id: 3, label: "Lead" },
  { id: 4, label: "Entri" },
];

const FormJenisLembur = ({ form }: Props) => {
  const { control } = form;

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <StaticAutoComplete
            // sx={{ width: 170, backgroundColor: "#fff" }}
            required
            control={control}
            name="jabatan"
            label="Jabatan"
            options={Jabatan}
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="From Salary"
            placeholder="0"
            control={control}
            name="from_salary"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="To Salary"
            placeholder="0"
            control={control}
            name="to_salary"
            type="number"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label="Nilai Perjam"
            placeholder="0"
            control={control}
            name="value"
            type="number"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormJenisLembur;

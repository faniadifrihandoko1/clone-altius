"use client";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { StaticRadioGroup } from "@/components/comon/input/radio-grup";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { transformLevelData } from "@/utils/function/transform";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { WorkUnitFormValues } from "../../schema/create.schema";

interface Props {
  form: UseFormReturn<WorkUnitFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const level = [
  {
    Id: 10,
    Name: "Level 1",
  },
  {
    Id: 11,
    Name: "Level 2",
  },
];

const posisi = [
  {
    Id: 19,
    Name: "Manager",
  },
  {
    Id: 20,
    Name: "Direktur",
  },
  {
    Id: 21,
    Name: "Lead",
  },
  {
    Id: 22,
    Name: "Entri",
  },
];

const divisi = [
  {
    Id: 15,
    Name: "Penjualan",
  },
  {
    Id: 16,
    Name: "Layanan Pelanggan",
  },
  {
    Id: 17,
    Name: "Teknologi Informasi",
  },
  {
    Id: 18,
    Name: "Logistik",
  },
  {
    Id: 19,
    Name: "Produksi",
  },
  {
    Id: 20,
    Name: "HRD",
  },
];

const departement = [
  {
    Id: 11,
    Name: "Keuangan",
  },
  {
    Id: 12,
    Name: "Pemasaran",
  },
  {
    Id: 13,
    Name: "SDM",
  },
  {
    Id: 14,
    Name: "R&D",
  },
  {
    Id: 15,
    Name: "Top Menejemen",
  },
];

const lokasi = [
  {
    Id: 20,
    Name: "Kantor Pusat altius-demo",
  },
  {
    Id: 1000196,
    Name: "Cabang Manado",
  },
  {
    Id: 1000213,
    Name: "Medan",
  },
];
export const FormWorkUnit = ({ form }: Props) => {
  const { control } = form;
  const t = useTranslations("organization.org-structure.modal.add.form");
  const labelOptions = t.raw("setKPI.options");

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={6}>
          <CustomTextField
            label={t("nameWorkUnit")}
            required
            control={control}
            name="unitName"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="workUnitLevel"
            label={t("workUnitLevel")}
            options={transformLevelData(level)}
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("nameJobTitle")}
            required
            control={control}
            name="jobTittle"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="positionLevel"
            label={t("positionLevel")}
            options={transformLevelData(posisi)}
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="officeLocation"
            label={t("officeLocation")}
            options={transformLevelData(lokasi)}
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="division"
            label={t("division")}
            options={transformLevelData(divisi)}
          />
        </Grid>
        <Grid size={6}>
          <StaticRadioGroup
            control={control}
            name="setKPI"
            label={t("setKPI.label")}
            row
            options={[
              { value: "org-employee", label: labelOptions[0] },
              { value: "only-employee", label: labelOptions[1] },
            ]}
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="departement"
            label={t("department")}
            options={transformLevelData(departement)}
            
          />
        </Grid>
      </Grid>
    </>
  );
};

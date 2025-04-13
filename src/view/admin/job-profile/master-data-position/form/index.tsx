"use client";
import { CustomRadioGroup } from "@/components/comon/input/radio-grup-custom";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { MasterDataPositionFormValues } from "../schema/create.schema";

interface Props {
  form: UseFormReturn<MasterDataPositionFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormMasterPosition = ({ form }: Props) => {
  const { control } = form;
  const t = useTranslations("job-profile.master-position.form");

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("name")}
            required
            control={control}
            name="Name"
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label={t("weight")}
            required
            control={control}
            name="Weight"
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <CustomRadioGroup
            control={control}
            row
            name="IsAppraisal"
            label={t("isAppraisal.title")}
            options={[
              { label: t("isAppraisal.yes"), value: true },
              { label: t("isAppraisal.no"), value: false },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormMasterPosition;

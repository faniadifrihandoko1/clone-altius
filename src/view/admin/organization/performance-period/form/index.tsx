"use client";
import { CustomDatePicker } from "@/components/comon/input/date-picker/custom-date-picker";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { PerformancePeriodFormValues } from "../schema/create.schema";

interface Props {
  form: UseFormReturn<PerformancePeriodFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormPerformancePeriod = ({ form }: Props) => {
  const { control } = form;
  const t = useTranslations("organization.performance-period.modal.add.form");

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("name")}
            required
            control={control}
            name="name"
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <CustomDatePicker
            control={control}
            name="startDate"
            label={t("startDate")}
            required
          />
        </Grid>
        <Grid size={12}>
          <CustomDatePicker
            control={control}
            name="endDate"
            label={t("endDate")}
            required
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label={t("desc")}
            control={control}
            name="desc"
            type="text"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormPerformancePeriod;

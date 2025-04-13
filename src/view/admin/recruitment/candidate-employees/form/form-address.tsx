import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { candidatEmployeeFormValues } from "../schema/detail.scehma";

interface FormDataProps {
  form: UseFormReturn<candidatEmployeeFormValues>;
}

const FormAddress = ({ form }: FormDataProps) => {
  const { control } = form;
  const t = useTranslations("recruitment.candidat-employee.form");

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <CustomTextField
          control={control}
          name="Address.IdentityAddress"
          label={t("IdentityAddress")}
          multiline
          rows={3}
        />
      </Grid>
      <Grid size={12}>
        <CustomTextField
          control={control}
          name="Address.HomeAddress"
          label={t("HomeAddress")}
          multiline
          rows={3}
        />
      </Grid>
    </Grid>
  );
};

export default FormAddress;

import { CustomRadioGroup } from "@/components/comon/input/radio-grup-custom";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { candidatEmployeeFormValues } from "../schema/detail.scehma";

interface FormDataProps {
  form: UseFormReturn<candidatEmployeeFormValues>;
}

const FormAssesment = ({ form }: FormDataProps) => {
  const { control } = form;
  const t = useTranslations("recruitment.candidat-employee.form");

  return (
    <Grid container>
      <Grid size={12}>
        <CustomRadioGroup
          name="Assessment"
          control={control}
          label={t("CheckAssessment")}
          radioGap={0}
          options={[
            {
              label: "Intellectual Ability Test (CFIT)",
              value: "cfit",
            },
            { label: "Work Personality Trait (DISC)", value: "disc" },
            { label: "English Ability Test (TOEFL)", value: "toefl" },
            { label: "Work Preference Test (MPT)", value: "mpt" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default FormAssesment;

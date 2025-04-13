import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { CustomDatePicker } from "@/components/comon/input/date-picker/custom-date-picker";
import { CustomRadioGroup } from "@/components/comon/input/radio-grup-custom";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { candidatEmployeeFormValues } from "../schema/detail.scehma";

interface FormDataProps {
  form: UseFormReturn<candidatEmployeeFormValues>;
}

const FormData = ({ form }: FormDataProps) => {
  const { control } = form;
  const t = useTranslations("recruitment.candidat-employee.form");

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.firstName"
          label={t("firstName")}
        />
      </Grid>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.lastName"
          label={t("lastName")}
        />
      </Grid>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.Email"
          label={t("Email")}
        />
      </Grid>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.MobilePhoneNumber"
          label={t("MobilePhoneNumber")}
        />
      </Grid>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.PlaceOfBirth"
          label={t("PlaceOfBirth")}
        />
      </Grid>
      <Grid size={6}>
        <CustomDatePicker
          control={control}
          name="data.BirthDate"
          label={t("BirthDate")}
        />
      </Grid>
      <Grid size={6}>
        <StaticAutoComplete
          control={control}
          options={[
            { label: "KTP", value: "ktp" },
            { label: "KTAS", value: "ktas" },
          ]}
          name="data.IdentityTypeId"
          label={t("IdentityType")}
        />
      </Grid>
      <Grid size={6}>
        <CustomTextField
          control={control}
          name="data.IdentityNumber"
          label={t("IdentityNumber")}
        />
      </Grid>
      <Grid size={6}>
        <CustomDatePicker
          control={control}
          name="data.TerminatedDate"
          label={t("TerminatedDate")}
        />
      </Grid>
      <Grid size={6}>
        <StaticAutoComplete
          control={control}
          options={[
            { label: "Islam", value: "islam" },
            { label: "Kristen", value: "kristen" },
            { label: "Hindu", value: "hindu" },
            { label: "Budha", value: "budha" },
            { label: "Konghucu", value: "konghucu" },
          ]}
          name="data.ReligionTypeId"
          label={t("Religion")}
        />
      </Grid>
      <Grid size={6}>
        <StaticAutoComplete
          control={control}
          options={[
            { label: "A", value: "a" },
            { label: "B", value: "b" },
            { label: "AB", value: "ab" },
            { label: "O", value: "o" },
          ]}
          name="data.EmpBloodTypeId"
          label={t("EmpBloodType")}
        />
      </Grid>
      <Grid size={6}>
        {" "}
        <StaticAutoComplete
          control={control}
          options={[
            { label: "Lajang", value: "lajang" },
            { label: "Menikah", value: "menikah" },
            { label: "Duda", value: "duda" },
            { label: "Janda", value: "janda" },
          ]}
          name="data.EmpMaritalStatusId"
          label={t("EmpMaritalStatus")}
        />
      </Grid>

      <Grid size={6}>
        <CustomRadioGroup
          name="data.gender"
          control={control}
          label={t("Gender")}
          row
          options={[
            { label: "Pria", value: "male" },
            { label: "Wanita", value: "female" },
          ]}
        />
      </Grid>
      <Grid size={6}>
        <StaticAutoComplete
          control={control}
          options={[{ label: "Implemantor #1", value: "implemantor" }]}
          name="data.DepartementId"
          label={t("Departement")}
        />
      </Grid>
    </Grid>
  );
};

export default FormData;

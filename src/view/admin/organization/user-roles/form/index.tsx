"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { TextFieldMask } from "@/components/comon/input/text-field/text-field-mask";
import { Checkbox, FormControlLabel, Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { Controller, UseFormReturn } from "react-hook-form";
import { UserAccountFormValues } from "../schema/user-account";

interface Props {
  form: UseFormReturn<UserAccountFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormUserAccount = ({ form }: Props) => {
  const { control } = form;
  const t = useTranslations("organization.user-roles.create.userAccount.form");

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("email")}
            required
            control={control}
            name="email"
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <TextFieldMask
            label={t("password")}
            placeholder="Password"
            required
            control={control}
            name="password"
            inputFormat="PASSWORD"
          />
        </Grid>
        <Grid size={12}>
          <Controller
            name="isExternal"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label={"Is External?"}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: "bold", // Membuat label bold
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormUserAccount;

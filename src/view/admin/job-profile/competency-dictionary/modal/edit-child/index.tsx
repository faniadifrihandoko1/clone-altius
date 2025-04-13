"use client";

import { ModalEdit } from "@/components/comon/custom-modal";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  ChildCompetencyDictionaryFormValues,
  ChildCompetencyDictionarySchema,
} from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditChildCompetencyDictionary = ({ open, toggle }: Props) => {
  const addChildCompetencyDictionaryForm =
    useForm<ChildCompetencyDictionaryFormValues>({
      defaultValues: {
        KeyBehavior: "",
        ProfLevel1: "",
        ProfLevel2: "",
        ProfLevel3: "",
        ProfLevel4: "",
        ProfLevel5: "",
      },
      resolver: zodResolver(ChildCompetencyDictionarySchema),
    });

  const { reset, handleSubmit, control } = addChildCompetencyDictionaryForm;
  const t = useTranslations("job-profile.competency-dictionary");

  const onSubmit = async (data: ChildCompetencyDictionaryFormValues) => {
    try {
      console.log(data);
      // const payloadData = objectClear<DeliveryExpeditionForm>(data)

      // await add_data(payloadData)

      // queryClient.invalidateQueries({ queryKey: ['LIST_DELIVERY_EXPEDITION'] })

      toggle();

      reset();
    } catch (error) {
      console.log("error add delivery expedition", error);
    }
  };

  return (
    <ModalEdit
      title={t("modal.add.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("form.KeyBehavior")}
            required
            control={control}
            name="KeyBehavior"
            type="text"
            multiline
            rows={2}
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("form.ProfLevel1")}
            required
            control={control}
            name="ProfLevel1"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("form.ProfLevel2")}
            required
            control={control}
            name="ProfLevel2"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("form.ProfLevel3")}
            required
            control={control}
            name="ProfLevel3"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("form.ProfLevel4")}
            required
            control={control}
            name="ProfLevel4"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label={t("form.ProfLevel5")}
            required
            control={control}
            name="ProfLevel5"
            type="text"
          />
        </Grid>
      </Grid>
    </ModalEdit>
  );
};

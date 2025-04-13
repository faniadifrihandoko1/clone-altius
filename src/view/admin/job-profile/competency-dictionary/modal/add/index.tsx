"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  CompetencyDictionaryFormValues,
  CompetencyDictionarySchema,
} from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddCompetencyDictionary = ({ open, toggle }: Props) => {
  const addMasterDataPositionForm = useForm<CompetencyDictionaryFormValues>({
    defaultValues: {
      Name: "",
      Definition: "",
    },
    resolver: zodResolver(CompetencyDictionarySchema),
  });

  const { reset, handleSubmit, control } = addMasterDataPositionForm;
  const t = useTranslations("job-profile.competency-dictionary");

  const onSubmit = async (data: CompetencyDictionaryFormValues) => {
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
    <ModalAdd
      title={t("modal.add.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("form.name")}
            required
            control={control}
            name="Name"
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label={t("form.definition")}
            required
            control={control}
            name="Definition"
            type="text"
          />
        </Grid>
      </Grid>
    </ModalAdd>
  );
};

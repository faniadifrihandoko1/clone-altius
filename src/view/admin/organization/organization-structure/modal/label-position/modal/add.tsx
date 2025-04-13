"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  LabelPositionFormValues,
  LabelPositionSchema,
} from "../../../schema/label.schema";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddLabelPosition = ({ open, toggle }: Props) => {
  const addUnitWorkForm = useForm<LabelPositionFormValues>({
    defaultValues: {
      content: "",
      typeLabel: "",
    },
    resolver: zodResolver(LabelPositionSchema),
  });

  const { reset, handleSubmit, control } = addUnitWorkForm;
  const t = useTranslations("organization.org-structure.modal.labelPosition");

  const onSubmit = async (data: LabelPositionFormValues) => {
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
            label={t("modal.add.form.typeLabel")}
            required
            control={control}
            name="typeLabel"
            type="text"
          />
        </Grid>

        <Grid size={12}>
          <CustomTextField
            label={t("modal.add.form.contents")}
            required
            control={control}
            name="content"
            type="text"
          />
        </Grid>
      </Grid>
    </ModalAdd>
  );
};

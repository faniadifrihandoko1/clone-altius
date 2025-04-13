"use client";

import { ModalEdit } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormMasterPosition from "../../form";
import {
  MasterDataPositionFormValues,
  MasterDataPositionSchema,
} from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditMasterDataPosition = ({ open, toggle }: Props) => {
  const addMasterDataPositionForm = useForm<MasterDataPositionFormValues>({
    defaultValues: {
      Name: "",
      IsAppraisal: false,
      Weight: "",
    },
    resolver: zodResolver(MasterDataPositionSchema),
  });

  const { reset, handleSubmit } = addMasterDataPositionForm;
  const t = useTranslations("job-profile.master-position");

  const onSubmit = async (data: MasterDataPositionFormValues) => {
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
      title={t("modal.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <Box></Box>
      <FormMasterPosition form={addMasterDataPositionForm} />
    </ModalEdit>
  );
};

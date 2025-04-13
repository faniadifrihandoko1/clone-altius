"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  MasterDataPositionFormValues,
  MasterDataPositionSchema,
} from "../../schema/create.schema";
import { Box } from "@mui/material";
import FormMasterPosition from "../../form";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddMasterDataPosition = ({ open, toggle }: Props) => {
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
    <ModalAdd
      title={t("modal.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <Box></Box>
      <FormMasterPosition form={addMasterDataPositionForm} />
    </ModalAdd>
  );
};

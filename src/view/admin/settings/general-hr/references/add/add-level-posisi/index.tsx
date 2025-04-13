"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelPosisi from "../../form/form-level-posisi";
import { KeahlianPegawaiFormValues } from "../../schema/schema-keahlian-pegawai";
import {
  levelPosisiFormValues,
  levelPosisiSchema,
} from "../../schema/schema-level-posisi";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddLevelPosisi = ({ open, toggle }: Props) => {
  const levelPosisiForm = useForm<levelPosisiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelPosisiSchema),
  });

  const { reset, handleSubmit } = levelPosisiForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: KeahlianPegawaiFormValues) => {
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
      title={t("tables.positionLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelPosisi form={levelPosisiForm} />
    </ModalAdd>
  );
};

"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelKeahlianKhsusus from "../../form/form-level-keahlian-khusus";
import { KeahlianPegawaiFormValues } from "../../schema/schema-keahlian-pegawai";
import {
  levelKeahlianKhususFormValues,
  levelKeahlianKhususSchema,
} from "../../schema/schema-level-keahlian-khusus";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddLevelKeahlianKhusus = ({ open, toggle }: Props) => {
  const levelKeahlianKhususForm = useForm<levelKeahlianKhususFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelKeahlianKhususSchema),
  });

  const { reset, handleSubmit } = levelKeahlianKhususForm;
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
      title={t("tables.specialSkillLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelKeahlianKhsusus form={levelKeahlianKhususForm} />
    </ModalAdd>
  );
};

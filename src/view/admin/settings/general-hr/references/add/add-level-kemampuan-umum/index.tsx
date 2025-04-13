"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelKemampuanUmum from "../../form/form-level-kemampuan-umum";
import { KeahlianPegawaiFormValues } from "../../schema/schema-keahlian-pegawai";
import {
  levelKemampuanUmumFormValues,
  levelKemampuanUmumSchema,
} from "../../schema/schema-level-kemampuan-umum";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddLevelKemampuanUmum = ({ open, toggle }: Props) => {
  const levelKemampuanUmumForm = useForm<levelKemampuanUmumFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelKemampuanUmumSchema),
  });

  const { reset, handleSubmit } = levelKemampuanUmumForm;
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
      title={t("tables.generalSkillLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelKemampuanUmum form={levelKemampuanUmumForm} />
    </ModalAdd>
  );
};

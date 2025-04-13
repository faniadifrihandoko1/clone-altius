"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormStatusPenangananKeluhan from "../../form/form-status-penanganan-keluhan";
import { KeahlianPegawaiFormValues } from "../../schema/schema-keahlian-pegawai";
import {
  statusPenangananKeluhanFormValues,
  statusPenangananKeluhanSchema,
} from "../../schema/schema-status-penanganan-keluhan";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddStatusPenangananKeluhan = ({ open, toggle }: Props) => {
  const statusPenangananKeluhanForm =
    useForm<statusPenangananKeluhanFormValues>({
      defaultValues: {
        name: "",
      },
      resolver: zodResolver(statusPenangananKeluhanSchema),
    });

  const { reset, handleSubmit } = statusPenangananKeluhanForm;
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
      title={t("table.complaintHandlingStatus.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormStatusPenangananKeluhan form={statusPenangananKeluhanForm} />
    </ModalAdd>
  );
};

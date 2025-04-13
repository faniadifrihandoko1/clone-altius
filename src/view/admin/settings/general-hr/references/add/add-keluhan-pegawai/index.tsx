"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormKeluhanPegawai from "../../form/form-keluhan-pegawai";
import { KeahlianPegawaiFormValues } from "../../schema/schema-keahlian-pegawai";
import {
  keluhanPegawaiFormValues,
  keluhanPegawaiSchema,
} from "../../schema/schema-keluhan-pegawai";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddKeluhanPegawai = ({ open, toggle }: Props) => {
  const keluhanPegawaiForm = useForm<keluhanPegawaiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(keluhanPegawaiSchema),
  });

  const { reset, handleSubmit } = keluhanPegawaiForm;
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
      title={t("tables.employeeComplaintType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormKeluhanPegawai form={keluhanPegawaiForm} />
    </ModalAdd>
  );
};

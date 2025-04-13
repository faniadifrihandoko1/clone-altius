"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormKeahlianPegawai from "../../form/form-keahlian-pegawai";
import {
  KeahlianPegawaiFormValues,
  keahlianPegawaiSchema,
} from "../../schema/schema-keahlian-pegawai";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddKeahlianPegawai = ({ open, toggle }: Props) => {
  const keahlianPegawaiForm = useForm<KeahlianPegawaiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(keahlianPegawaiSchema),
  });

  const { reset, handleSubmit } = keahlianPegawaiForm;
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
      title={t("tables.employeeSkill.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormKeahlianPegawai form={keahlianPegawaiForm} />
    </ModalAdd>
  );
};

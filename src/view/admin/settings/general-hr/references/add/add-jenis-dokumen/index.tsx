"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormJenisDokumen from "../../form/form-jenis-dokumen";
import { JenisAsetPegawaiFormValues } from "../../schema/schema-jenis-aset-pegawai";
import {
  JenisDokumenFormValues,
  jenisDokumenSchema,
} from "../../schema/schema-jenis-dokumen";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddJenisDokumen = ({ open, toggle }: Props) => {
  const addJenisDokumenForm = useForm<JenisDokumenFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(jenisDokumenSchema),
  });

  const { reset, handleSubmit } = addJenisDokumenForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: JenisAsetPegawaiFormValues) => {
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
      title={t("tables.documentType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormJenisDokumen form={addJenisDokumenForm} />
    </ModalAdd>
  );
};

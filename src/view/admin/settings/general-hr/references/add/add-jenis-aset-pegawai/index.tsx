"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormJenisAsetPegawai from "../../form/form-jenis-aset-pegawai";
import {
  JenisAsetPegawaiFormValues,
  jenisAsetPegawaiSchema,
} from "../../schema/schema-jenis-aset-pegawai";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddJenisAsetPegawai = ({ open, toggle }: Props) => {
  const addJenisAsetPegawaiForm = useForm<JenisAsetPegawaiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(jenisAsetPegawaiSchema),
  });

  const { reset, handleSubmit } = addJenisAsetPegawaiForm;
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
      title={t("tables.employeeAssetType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormJenisAsetPegawai form={addJenisAsetPegawaiForm} />
    </ModalAdd>
  );
};

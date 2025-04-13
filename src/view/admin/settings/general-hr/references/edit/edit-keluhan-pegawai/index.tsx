"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormKeluhanPegawai from "../../form/form-keluhan-pegawai";
import { JenisAsetPegawaiFormValues } from "../../schema/schema-jenis-aset-pegawai";
import {
  keluhanPegawaiFormValues,
  keluhanPegawaiSchema,
} from "../../schema/schema-keluhan-pegawai";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditKeluhanPegawai = ({ open, toggle }: ModalEdit) => {
  const keluhanPegawaiForm = useForm<keluhanPegawaiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(keluhanPegawaiSchema),
  });

  const { handleSubmit } = keluhanPegawaiForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: JenisAsetPegawaiFormValues) => {
    try {
      console.log(data);
      //   const pitData = objectClear<StatusKepegawaianFormValues>(data);
      //   await edit_pit(pitData);
      //   queryClient.invalidateQueries({ queryKey: ["LIST_PIT_ALL"] });
      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalEdit
      title={t("tables.employeeComplaintType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormKeluhanPegawai form={keluhanPegawaiForm} />
    </ModalEdit>
  );
};

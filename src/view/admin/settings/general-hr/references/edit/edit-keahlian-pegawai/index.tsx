"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormKeahlianPegawai from "../../form/form-keahlian-pegawai";
import { JenisAsetPegawaiFormValues } from "../../schema/schema-jenis-aset-pegawai";
import {
  KeahlianPegawaiFormValues,
  keahlianPegawaiSchema,
} from "../../schema/schema-keahlian-pegawai";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditKeahlianPegawai = ({ open, toggle }: ModalEdit) => {
  const keahlianPegawaiForm = useForm<KeahlianPegawaiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(keahlianPegawaiSchema),
  });

  const { handleSubmit } = keahlianPegawaiForm;
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
      title={t("tables.employeeSkill.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormKeahlianPegawai form={keahlianPegawaiForm} />
    </ModalEdit>
  );
};

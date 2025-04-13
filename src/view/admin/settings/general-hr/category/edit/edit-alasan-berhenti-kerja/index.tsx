"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormAlasanBerhentiKerja from "../../form/form-alasan-berhenti-kerja";
import {
  AlasanBerhentiKerjaFormValues,
  alasanBerhentiKerjaSchema,
  StatusKepegawaianFormValues,
} from "../../schema/create";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditAlasanBerhentiKerja = ({ open, toggle }: ModalEdit) => {
  const alasanBerhentiKerjaForm = useForm<AlasanBerhentiKerjaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(alasanBerhentiKerjaSchema),
  });

  const { handleSubmit } = alasanBerhentiKerjaForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: StatusKepegawaianFormValues) => {
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
      title={t("tables.terminationReason.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormAlasanBerhentiKerja form={alasanBerhentiKerjaForm} />
    </ModalEdit>
  );
};

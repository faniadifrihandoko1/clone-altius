"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormStatusPenangananKeluhan from "../../form/form-status-penanganan-keluhan";
import {
  statusPenangananKeluhanFormValues,
  statusPenangananKeluhanSchema,
} from "../../schema/schema-status-penanganan-keluhan";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditStatusPenangananKeluhan = ({
  open,
  toggle,
}: ModalEdit) => {
  const statusPenangananKeluhanForm =
    useForm<statusPenangananKeluhanFormValues>({
      defaultValues: {
        name: "",
      },
      resolver: zodResolver(statusPenangananKeluhanSchema),
    });

  const { handleSubmit } = statusPenangananKeluhanForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: statusPenangananKeluhanFormValues) => {
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
      title={t("tables.complaintHandlingStatus.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormStatusPenangananKeluhan form={statusPenangananKeluhanForm} />
    </ModalEdit>
  );
};

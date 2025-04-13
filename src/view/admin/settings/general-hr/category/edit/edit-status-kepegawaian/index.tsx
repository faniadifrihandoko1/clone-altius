"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormStatusKepegawaian from "../../form/form-status-kepegawaian";
import {
  StatusKepegawaianFormValues,
  statusKepegawaianSchema,
} from "../../schema/create";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditStatusKepegawaian = ({ open, toggle }: ModalEdit) => {
  const addStatusKepegawaianForm = useForm<StatusKepegawaianFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(statusKepegawaianSchema),
  });

  const { reset, handleSubmit } = addStatusKepegawaianForm;

  const t = useTranslations("general-hr.category");
  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: StatusKepegawaianFormValues) => {
    try {
      console.log(data);
      //   const pitData = objectClear<StatusKepegawaianFormValues>(data);
      //   await edit_pit(pitData);
      //   queryClient.invalidateQueries({ queryKey: ["LIST_PIT_ALL"] });
      toggle();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalEdit
      title={t("tables.employmentStatus.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormStatusKepegawaian form={addStatusKepegawaianForm} />
    </ModalEdit>
  );
};

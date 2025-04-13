"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormDepartemen from "../../form/form-departemen";
import {
  departemenFormValues,
  departemenSchema,
} from "../../schema/schema-departemen";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditDepartemen = ({ open, toggle }: ModalEdit) => {
  const departemenForm = useForm<departemenFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(departemenSchema),
  });

  const {  handleSubmit } = departemenForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: departemenFormValues) => {
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
      title={t("tables.department.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormDepartemen form={departemenForm} />
    </ModalEdit>
  );
};

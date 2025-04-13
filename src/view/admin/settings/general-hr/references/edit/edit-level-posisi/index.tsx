"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelPosisi from "../../form/form-level-posisi";
import {
  levelPosisiFormValues,
  levelPosisiSchema,
} from "../../schema/schema-level-posisi";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditLevelPosisi = ({ open, toggle }: ModalEdit) => {
  const levelPosisiForm = useForm<levelPosisiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelPosisiSchema),
  });

  const { handleSubmit } = levelPosisiForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: levelPosisiFormValues) => {
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
      title={t("tables.positionLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelPosisi form={levelPosisiForm} />
    </ModalEdit>
  );
};

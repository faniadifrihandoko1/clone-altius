"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelKeahlianKhsusus from "../../form/form-level-keahlian-khusus";
import {
  levelKeahlianKhususFormValues,
  levelKeahlianKhususSchema,
} from "../../schema/schema-level-keahlian-khusus";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditLevelKeahlianKhusus = ({ open, toggle }: ModalEdit) => {
  const levelKeahlianKhususForm = useForm<levelKeahlianKhususFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelKeahlianKhususSchema),
  });

  const { handleSubmit } = levelKeahlianKhususForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: levelKeahlianKhususFormValues) => {
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
      title={t("tables.specialSkillLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelKeahlianKhsusus form={levelKeahlianKhususForm} />
    </ModalEdit>
  );
};

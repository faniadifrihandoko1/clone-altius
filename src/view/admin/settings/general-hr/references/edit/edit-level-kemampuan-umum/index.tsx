"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelKemampuanUmum from "../../form/form-level-kemampuan-umum";
import {
  levelKemampuanUmumFormValues,
  levelKemampuanUmumSchema,
} from "../../schema/schema-level-kemampuan-umum";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditLevelKemampuanUmum = ({ open, toggle }: ModalEdit) => {
  const levelKemampuanUmumForm = useForm<levelKemampuanUmumFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelKemampuanUmumSchema),
  });

  const { handleSubmit } = levelKemampuanUmumForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: levelKemampuanUmumFormValues) => {
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
      title={t("tables.generalSkillLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelKemampuanUmum form={levelKemampuanUmumForm} />
    </ModalEdit>
  );
};

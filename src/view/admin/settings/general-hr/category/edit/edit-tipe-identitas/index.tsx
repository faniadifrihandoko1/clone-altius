"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelUnitKerja from "../../form/form-level-unit-kerja";
import {
  LevelUnitKerjaFormValues,
  levelUnitKerjaSchema,
  StatusKepegawaianFormValues,
} from "../../schema/create";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditTipeIdentitas = ({ open, toggle }: ModalEdit) => {
  const addLevelUnitKerjaForm = useForm<LevelUnitKerjaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelUnitKerjaSchema),
  });

  const { handleSubmit } = addLevelUnitKerjaForm;
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
      title={t("tables.identityType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelUnitKerja form={addLevelUnitKerjaForm} />
    </ModalEdit>
  );
};

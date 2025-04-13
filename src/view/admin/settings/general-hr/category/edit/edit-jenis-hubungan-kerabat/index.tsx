"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormStatusKepegawaian from "../../form/form-status-kepegawaian";
import {
  HubunganKerabatFormValues,
  hubunganKerabatSchema,
  StatusKepegawaianFormValues,
} from "../../schema/create";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditJenisHubunganKerabat = ({ open, toggle }: ModalEdit) => {
  const addJenisHubunganKerabatForm = useForm<HubunganKerabatFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(hubunganKerabatSchema),
  });

  const { handleSubmit } = addJenisHubunganKerabatForm;
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
      title={t("tables.relationshipType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormStatusKepegawaian form={addJenisHubunganKerabatForm} />
    </ModalEdit>
  );
};

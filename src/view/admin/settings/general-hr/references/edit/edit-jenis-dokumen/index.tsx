"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormJenisDokumen from "../../form/form-jenis-dokumen";
import {
  JenisDokumenFormValues,
  jenisDokumenSchema,
} from "../../schema/schema-jenis-dokumen";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditJenisDokumen = ({ open, toggle }: ModalEdit) => {
  const jenisDokumenForm = useForm<JenisDokumenFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(jenisDokumenSchema),
  });

  const { handleSubmit } = jenisDokumenForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: JenisDokumenFormValues) => {
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
      title={t("tables.documentType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormJenisDokumen form={jenisDokumenForm} />
    </ModalEdit>
  );
};

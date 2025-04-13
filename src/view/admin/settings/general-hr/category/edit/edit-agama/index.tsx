"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormAlasanBerhentiKerja from "../../form/form-alasan-berhenti-kerja";
import { AgamaFormValues, agamaSchema } from "../../schema/create";

interface ModalEdit {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditAgama = ({ open, toggle }: ModalEdit) => {
  const agamaForm = useForm<AgamaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(agamaSchema),
  });

  const { handleSubmit } = agamaForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: AgamaFormValues) => {
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
      title={t("tables.religion.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}

      // buttonCancelProps={{ onClick: handleClose }}
      // buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormAlasanBerhentiKerja form={agamaForm} />
    </ModalEdit>
  );
};

"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormAgama from "../../form/form-agama";
import { AgamaFormValues, agamaSchema } from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddAgama = ({ open, toggle }: Props) => {
  const addAgamaForm = useForm<AgamaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(agamaSchema),
  });

  const { reset, handleSubmit } = addAgamaForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: AgamaFormValues) => {
    try {
      console.log(data);
      // const payloadData = objectClear<DeliveryExpeditionForm>(data)

      // await add_data(payloadData)

      // queryClient.invalidateQueries({ queryKey: ['LIST_DELIVERY_EXPEDITION'] })

      toggle();

      reset();
    } catch (error) {
      console.log("error add delivery expedition", error);
    }
  };

  return (
    <ModalAdd
      title={t("tables.religion.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormAgama form={addAgamaForm} />
    </ModalAdd>
  );
};

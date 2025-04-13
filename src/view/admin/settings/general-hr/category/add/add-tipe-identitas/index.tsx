"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormTipeIdentitas from "../../form/form-tipe-identitas";
import {
  TipeIdentitasFormValues,
  tipeIdentitasSchema,
} from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddTipeIdentitas = ({ open, toggle }: Props) => {
  const addTipeIdentitasForm = useForm<TipeIdentitasFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(tipeIdentitasSchema),
  });

  const { reset, handleSubmit } = addTipeIdentitasForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: TipeIdentitasFormValues) => {
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
      <FormTipeIdentitas form={addTipeIdentitasForm} />
    </ModalAdd>
  );
};

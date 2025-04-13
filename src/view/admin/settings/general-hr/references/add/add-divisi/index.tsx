"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormDivisi from "../../form/form-divisi";
import { divisiFormValues, divisiSchema } from "../../schema/schema-divisi";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddDivisi = ({ open, toggle }: Props) => {
  const divisiForm = useForm<divisiFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(divisiSchema),
  });

  const { reset, handleSubmit } = divisiForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: divisiFormValues) => {
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
      title={t("tables.division.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormDivisi form={divisiForm} />
    </ModalAdd>
  );
};

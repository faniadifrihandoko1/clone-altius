"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormDepartemen from "../../form/form-departemen";
import {
  departemenFormValues,
  departemenSchema,
} from "../../schema/schema-departemen";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddDepartemen = ({ open, toggle }: Props) => {
  const departemenForm = useForm<departemenFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(departemenSchema),
  });

  const { reset, handleSubmit } = departemenForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: departemenFormValues) => {
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
      title={t("tables.department.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormDepartemen form={departemenForm} />
    </ModalAdd>
  );
};

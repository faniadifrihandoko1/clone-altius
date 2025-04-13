"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormJenisHubunganKerabat from "../../form/form-jenis-hubungan-kerabat";
import {
  HubunganKerabatFormValues,
  JenjangPendidikanFormValues,
  jenjangPendidikanSchema,
} from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddJenisHubunganKerabat = ({ open, toggle }: Props) => {
  const addJenisHubunganKerabatForm = useForm<JenjangPendidikanFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(jenjangPendidikanSchema),
  });

  const { reset, handleSubmit } = addJenisHubunganKerabatForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: HubunganKerabatFormValues) => {
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
      title={t("tables.relationshipType.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormJenisHubunganKerabat form={addJenisHubunganKerabatForm} />
    </ModalAdd>
  );
};

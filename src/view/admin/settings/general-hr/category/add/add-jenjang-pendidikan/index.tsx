"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormJenjangPendidikan from "../../form/form-jenjang-pendidikan";
import {
  JenjangPendidikanFormValues,
  jenjangPendidikanSchema,
} from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddJenjangPendidikan = ({ open, toggle }: Props) => {
  const addJenjangPendidikanForm = useForm<JenjangPendidikanFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(jenjangPendidikanSchema),
  });

  const { reset, handleSubmit } = addJenjangPendidikanForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: JenjangPendidikanFormValues) => {
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
      title={t("tables.educationLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormJenjangPendidikan form={addJenjangPendidikanForm} />
    </ModalAdd>
  );
};

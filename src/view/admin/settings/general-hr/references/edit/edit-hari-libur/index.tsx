"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormHariLibur from "../../form/form-hari-libur";
import {
  HariLiburFormValues,
  hariLiburSchema,
} from "../../schema/schema-hari-libur";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditHariLibur = ({ open, toggle, id }: Props) => {
  const editHariLiburForm = useForm<HariLiburFormValues>({
    defaultValues: {
      name: "",
      date: null,
      isCutiBersama: false,
    },
    resolver: zodResolver(hariLiburSchema),
  });

  console.log(id);

  const { reset, handleSubmit } = editHariLiburForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: HariLiburFormValues) => {
    try {
      console.log(data);
      // const payloadData = objectClear<DeliveryExpeditionForm>(data)

      // await edit_data(payloadData)

      // queryClient.invalidateQueries({ queryKey: ['LIST_DELIVERY_EXPEDITION'] })

      toggle();

      reset();
    } catch (error) {
      console.log("error add delivery expedition", error);
    }
  };

  return (
    <ModalEdit
      title={t("tables.holidayMaster.title")}
      maxWidth="sm"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormHariLibur form={editHariLiburForm} />
    </ModalEdit>
  );
};

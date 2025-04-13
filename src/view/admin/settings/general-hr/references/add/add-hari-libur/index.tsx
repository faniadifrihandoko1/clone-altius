"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
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
}

export const ModalAddHariLibur = ({ open, toggle }: Props) => {
  const addHariLiburForm = useForm<HariLiburFormValues>({
    defaultValues: {
      name: "",
      date: null,
      isCutiBersama: false,
    },
    resolver: zodResolver(hariLiburSchema),
  });

  const { reset, handleSubmit } = addHariLiburForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: HariLiburFormValues) => {
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
      title={t("tables.holidayMaster.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormHariLibur form={addHariLiburForm} />
    </ModalAdd>
  );
};

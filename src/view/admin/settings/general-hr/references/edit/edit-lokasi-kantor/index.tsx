"use client";
import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLokasiKantor from "../../form/form-lokasi-kantor";
import {
  LokasiKantorFormValues,
  lokasiKantorSchema,
} from "../../schema/schema-lokasi-kantor";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditLokasiKantor = ({ open, toggle }: Props) => {
  const addLokasiKantorForm = useForm<LokasiKantorFormValues>({
    defaultValues: {
      name: "",
      jarak: 0,
      longitude: 0,
      latitude: 0,
      timezone: 7,
    },
    resolver: zodResolver(lokasiKantorSchema),
  });

  const { reset, handleSubmit } = addLokasiKantorForm;
  const t = useTranslations("general-hr.references");

  const onSubmit = async (data: LokasiKantorFormValues) => {
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
      title={t("tables.officeLocation.title")}
      maxWidth="sm"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLokasiKantor form={addLokasiKantorForm} />
    </ModalEdit>
  );
};

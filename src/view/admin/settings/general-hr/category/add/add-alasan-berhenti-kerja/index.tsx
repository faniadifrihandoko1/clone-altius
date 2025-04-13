"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormAlasanBerhentiKerja from "../../form/form-alasan-berhenti-kerja";
import {
  AlasanBerhentiKerjaFormValues,
  alasanBerhentiKerjaSchema,
} from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddAlasanBerhentiKerja = ({ open, toggle }: Props) => {
  const alasanBerhentiKerjaForm = useForm<AlasanBerhentiKerjaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(alasanBerhentiKerjaSchema),
  });

  const { reset, handleSubmit } = alasanBerhentiKerjaForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: AlasanBerhentiKerjaFormValues) => {
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
      title={t("tables.terminationReason.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormAlasanBerhentiKerja form={alasanBerhentiKerjaForm} />
    </ModalAdd>
  );
};

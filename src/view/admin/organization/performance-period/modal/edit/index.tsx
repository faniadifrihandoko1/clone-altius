"use client";

import ModalEdit from "@/components/comon/custom-modal/modal-edit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormPerformancePeriod from "../../form";
import {
    PerformancePeriodFormValues,
    PerformancePeriodSchema,
} from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditPerformancePeriod = ({ open, toggle }: Props) => {
  const addPerformancePeriodForm = useForm<PerformancePeriodFormValues>({
    defaultValues: {
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      desc: "",
    },
    resolver: zodResolver(PerformancePeriodSchema),
  });

  const { reset, handleSubmit } = addPerformancePeriodForm;
  const t = useTranslations("organization.performance-period");

  const onSubmit = async (data: PerformancePeriodFormValues) => {
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
    <ModalEdit
      title={t("modal.add.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormPerformancePeriod form={addPerformancePeriodForm} />
    </ModalEdit>
  );
};

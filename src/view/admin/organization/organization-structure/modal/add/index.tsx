"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { FormWorkUnit } from "../../form/form-unit-work";
import { WorkUnitFormValues, WorkUnitSchema } from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddUnitWork = ({ open, toggle }: Props) => {
  const addUnitWorkForm = useForm<WorkUnitFormValues>({
    defaultValues: {
      unitName: "",
      jobTittle: "",
      setKPI: "org-employee",
      officeLocation: null,
      departement: null,
      division: null,
      positionLevel: null,
      workUnitLevel: null,
    },
    resolver: zodResolver(WorkUnitSchema),
  });

  const { reset, handleSubmit } = addUnitWorkForm;
  const t = useTranslations("organization.org-structure");

  const onSubmit = async (data: WorkUnitFormValues) => {
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
      title={t("modal.add.title")}
      maxWidth="md"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormWorkUnit form={addUnitWorkForm} />
    </ModalAdd>
  );
};

"use client";
import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormLevelUnitKerja from "../../form/form-level-unit-kerja";
import {
  LevelUnitKerjaFormValues,
  levelUnitKerjaSchema,
} from "../../schema/create";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddLevelUnitKerja = ({ open, toggle }: Props) => {
  const addLevelUnitKerjaForm = useForm<LevelUnitKerjaFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(levelUnitKerjaSchema),
  });

  const { reset, handleSubmit } = addLevelUnitKerjaForm;
  const t = useTranslations("general-hr.category");

  const onSubmit = async (data: LevelUnitKerjaFormValues) => {
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
      title={t("tables.workUnitLevel.title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormLevelUnitKerja form={addLevelUnitKerjaForm} />
    </ModalAdd>
  );
};

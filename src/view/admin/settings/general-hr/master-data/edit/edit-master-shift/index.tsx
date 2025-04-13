"use client";
import { ModalCustom } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormMasterShift from "../../form/form-master-shift";
import {
  masterShiftFormValues,
  masterShiftSchema,
} from "../../schema/schema-master-shift";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditMasterShift = ({ open, toggle }: Props) => {
  const editMasterShiftForm = useForm<masterShiftFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(masterShiftSchema),
  });

  const { reset, handleSubmit } = editMasterShiftForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: masterShiftFormValues) => {
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
    <ModalCustom
      title="Edit Data Master Shift"
      maxWidth="sm"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormMasterShift form={editMasterShiftForm} />
    </ModalCustom>
  );
};

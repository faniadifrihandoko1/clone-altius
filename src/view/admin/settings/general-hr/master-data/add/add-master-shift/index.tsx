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
}

export const ModalAddMasterShift = ({ open, toggle }: Props) => {
  const addMasterShiftForm = useForm<masterShiftFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(masterShiftSchema),
  });

  const { reset, handleSubmit } = addMasterShiftForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: masterShiftFormValues) => {
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
    <ModalCustom
      title="Tambah Data Master Shift"
      maxWidth="xs"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormMasterShift form={addMasterShiftForm} />
    </ModalCustom>
  );
};

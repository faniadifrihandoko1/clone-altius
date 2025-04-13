"use client";
import { ModalCustom } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormNestedMasterShift from "../../form/form-master-shift/form-nested-master-shift";
import {
  nestedMasterShiftFormValues,
  nestedMasterShiftSchema,
} from "../../schema/schema-master-shift";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditNestedMasterShift = ({ open, toggle }: Props) => {
  const editNestedMasterShiftForm = useForm<nestedMasterShiftFormValues>({
    defaultValues: {
      day: "",
      in_time: "",
      out_time: "",
    },
    resolver: zodResolver(nestedMasterShiftSchema),
  });

  const { reset, handleSubmit } = editNestedMasterShiftForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: nestedMasterShiftFormValues) => {
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
      title="Edit Data Detail Shift"
      maxWidth="sm"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormNestedMasterShift form={editNestedMasterShiftForm} />
    </ModalCustom>
  );
};

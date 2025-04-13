"use client";
import { ModalCustom } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormJenisCuti from "../../form/form-jenis-cuti";
import {
  jenisCutiFormValues,
  jenisCutiSchema,
} from "../../schema/schema-jenis-cuti";

interface Props {
  open: boolean;
  toggle: () => void;
  id: number;
}

export const ModalEditJenisCuti = ({ open, toggle }: Props) => {
  const addJenisCutiForm = useForm<jenisCutiFormValues>({
    defaultValues: {
      name: "",
      kuota: 0,
    },
    resolver: zodResolver(jenisCutiSchema),
  });

  const { reset, handleSubmit } = addJenisCutiForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: jenisCutiFormValues) => {
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
      title="Edit Data Jenis Cuti"
      maxWidth="sm"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormJenisCuti form={addJenisCutiForm} />
    </ModalCustom>
  );
};

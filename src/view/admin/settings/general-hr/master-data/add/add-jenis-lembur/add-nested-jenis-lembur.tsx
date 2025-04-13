"use client";

import { ModalCustom } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormNestedJenisLembur from "../../form/form-jenis-lembur/form-nested-jenis-lembur";
import {
  nestedJenisLemburFormValue,
  nestedJenisLemburSchemas,
} from "../../schema/schema-jenis-lembur";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddNestedJenisLembur = ({ open, toggle }: Props) => {
  const addNestedJenisLemburForm = useForm<nestedJenisLemburFormValue>({
    defaultValues: {
      start_minute: 0,
      end_minute: 0,
      value: 0,
      keterangan: null,
    },
    resolver: zodResolver(nestedJenisLemburSchemas),
  });

  const { reset, handleSubmit } = addNestedJenisLemburForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: nestedJenisLemburFormValue) => {
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
      title="Tambah Data Perilaku Utama & Level Kefasihan"
      maxWidth="xs"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormNestedJenisLembur form={addNestedJenisLemburForm} />
    </ModalCustom>
  );
};

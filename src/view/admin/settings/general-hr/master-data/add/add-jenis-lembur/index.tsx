"use client";
import { ModalCustom } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormJenisLembur from "../../form/form-jenis-lembur";
import {
  jenisLemburFormValues,
  jenisLemburSchemas,
} from "../../schema/schema-jenis-lembur";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddJenisLembur = ({ open, toggle }: Props) => {
  const addJenisLemburForm = useForm<jenisLemburFormValues>({
    defaultValues: {
      jabatan: null,
      from_salary: 0,
      to_salary: 0,
      value: 0,
    },
    resolver: zodResolver(jenisLemburSchemas),
  });

  const { reset, handleSubmit } = addJenisLemburForm;

  const handleClose = () => {
    toggle();
    reset();
  };

  const onSubmit = async (data: jenisLemburFormValues) => {
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
      title="Tambah Data Jenis Lembur"
      maxWidth="xs"
      open={open}
      toggle={toggle}
      buttonCancelProps={{ onClick: handleClose }}
      buttonOkProps={{ onClick: handleSubmit(onSubmit) }}
    >
      <FormJenisLembur form={addJenisLemburForm} />
    </ModalCustom>
  );
};

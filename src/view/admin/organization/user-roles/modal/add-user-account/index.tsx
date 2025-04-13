"use client";

import ModalAdd from "@/components/comon/custom-modal/modal-add";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import FormUserAccount from "../../form";
import {
  UserAccountFormValues,
  userAccountSchema,
} from "../../schema/user-account";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalAddUserAccount = ({ open, toggle }: Props) => {
  const addUserAccountForm = useForm<UserAccountFormValues>({
    defaultValues: {
      email: "",
      password: "",
      isExternal: false,
    },
    resolver: zodResolver(userAccountSchema),
  });

  const { reset, handleSubmit } = addUserAccountForm;
  const t = useTranslations("organization.user-roles.create.userAccount");

  const onSubmit = async (data: UserAccountFormValues) => {
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
      title={t("title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <FormUserAccount form={addUserAccountForm} />
    </ModalAdd>
  );
};

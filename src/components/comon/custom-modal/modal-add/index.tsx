"use client";

import { DialogProps, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslations } from "next-intl";
import { forwardRef, PropsWithChildren } from "react";
import ModalCustom from "../modal-custom";

interface Props extends PropsWithChildren, Partial<DialogProps> {
  toggle: () => void;
  open: boolean;
  handleSave: () => void;
  title: string;
  children: React.ReactNode;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAdd = ({
  toggle,
  open,
  handleSave,
  title,
  children,
  ...dialogProps
}: Props) => {
  const t = useTranslations("comon.modal.add");

  return (
    <ModalCustom
      TransitionComponent={Transition}
      title={t("title", { name: title })}
      open={open}
      fullWidth
      maxWidth="xs"
      toggle={toggle}
      {...dialogProps}
      buttonOkProps={{
        onClick: handleSave,
        variant: "contained",
        color: "primary",
        children: t("button.yes"),
      }}
      buttonCancelProps={{
        children: t("button.no"),
      }}
    >
      {children}
    </ModalCustom>
  );
};

export default ModalAdd;

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
  buttonOkName?: string;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalAny = ({
  toggle,
  open,
  handleSave,
  title,
  children,
  buttonOkName,
  ...dialogProps
}: Props) => {
  const t = useTranslations("comon.modal.add");

  return (
    <ModalCustom
      TransitionComponent={Transition}
      title={title}
      open={open}
      fullWidth
      maxWidth="xs"
      toggle={toggle}
      {...dialogProps}
      buttonOkProps={{
        onClick: handleSave,
        variant: "contained",
        color: "primary",
        children: buttonOkName ? buttonOkName : t("button.yes"),
      }}
      buttonCancelProps={{
        children: t("button.no"),
      }}
    >
      {children}
    </ModalCustom>
  );
};

export default ModalAny;

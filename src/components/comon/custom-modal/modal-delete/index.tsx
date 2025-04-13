"use client";

import { DialogProps, Slide, Stack, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslations } from "next-intl";
import { forwardRef, PropsWithChildren } from "react";
import ModalCustom from "../modal-custom";

interface Props extends PropsWithChildren, Partial<DialogProps> {
  toggle: () => void;
  open: boolean;
  handleDelete: () => void;
  name: any;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDelete = ({
  toggle,
  open,
  handleDelete,
  name,
  ...dialogProps
}: Props) => {
  const t = useTranslations("comon.modal.delete");

  return (
    <ModalCustom
      TransitionComponent={Transition}
      title={t("title")}
      open={open}
      fullWidth
      maxWidth="sm"
      toggle={toggle}
      {...dialogProps}
      buttonOkProps={{
        onClick: handleDelete,
        variant: "contained",
        color: "error",
        children: t("button.yes"),
      }}
      buttonCancelProps={{
        children: t("button.no"),
      }}
    >
      <Stack spacing={3} sx={{ paddingX: 2, paddingY: 2 }}>
        <Typography fontSize={14} textAlign="center">
          {t.rich("message", {
            strong: (chunks) => <strong>{chunks}</strong>,
            name,
          })}
        </Typography>
      </Stack>
    </ModalCustom>
  );
};

export default ModalDelete;

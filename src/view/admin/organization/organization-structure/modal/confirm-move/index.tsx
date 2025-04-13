import { ModalCustom } from "@/components/comon/custom-modal";
import { Slide, Stack, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslations } from "next-intl";
import { forwardRef, ReactNode } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  handleCancelMove: () => void;
  handleConfirmMove: () => void;
  draggedNode: any;
  draggedNodeName: string;
}

export const ModalConfirmMove = ({
  draggedNode,
  draggedNodeName,
  handleCancelMove,
  handleConfirmMove,
}: Props) => {
  const t = useTranslations("organization.org-structure.modal.confirmMove");

  return (
    <ModalCustom
      TransitionComponent={Transition}
      title={t("title")}
      open={!!draggedNode}
      fullWidth
      maxWidth="sm"
      toggle={handleCancelMove}
      buttonOkProps={{
        onClick: handleConfirmMove,
        variant: "contained",
        color: "primary",
        children: t("button.yes"),
      }}
      buttonCancelProps={{
        children: t("button.no"),
      }}
    >
      <Stack spacing={3} sx={{ paddingX: 2, paddingY: 2 }}>
        <Typography fontSize={14} textAlign="center">
          {/* Apakah anda yakin untuk memindahkan item{" "}
          <strong>{draggedNodeName}</strong> ini? */}
          {t.rich("desc", {
            strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
            name: draggedNodeName,
          })}
        </Typography>
      </Stack>
    </ModalCustom>
  );
};

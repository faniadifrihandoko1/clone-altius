"use client";

import { CustomCloseButton } from "@/components/comon/custom-button/close-button";
import Icon from "@/components/comon/icon";
import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  Divider,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { PropsWithChildren, ReactNode, forwardRef } from "react";

interface ModalProps extends PropsWithChildren, Partial<DialogProps> {
  title: string;
  buttonOkProps?: ButtonProps;
  buttonCancelProps?: ButtonProps;
  buttonDeleteProps?: ButtonProps;
  dialogQuery?: string;
  secondaryAction?: ReactNode;
  dialogContentProps?: DialogContentProps;
  open: boolean;
  toggle: () => void;
  hideButton?: boolean;
  isLoading?: boolean;
  handleDelete?: any;
  hiddenClose?: boolean;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalCustom = (props: ModalProps) => {
  const {
    title,
    handleDelete,
    hideButton,
    isLoading = false,
    children,
    open,
    toggle,
    buttonDeleteProps,
    buttonOkProps,
    buttonCancelProps,
    secondaryAction = <div />,
    dialogContentProps = {},
    hiddenClose,
    ...dialogProps
  } = props;

  // const theme = useTheme();

  // const fullScreen = useMediaQuery(theme.breakpoints.up("md"));

  const onClose = () => {
    if (hiddenClose) {
      toggle();
    }
  };

  return (
    <Dialog
      // fullScreen={fullScreen}
      fullWidth
      onClose={onClose}
      open={open}
      scroll="body"
      TransitionComponent={Transition}
      {...dialogProps}
      sx={{ "& .MuiDialog-paper": { overflow: "visible" } }}
    >
      <DialogTitle
        fontWeight={600}
        fontSize={17}
        sx={{ position: "relative", textTransform: "capitalize" }}
      >
        {title}
      </DialogTitle>
      <Divider sx={{ mt: -1 }} />

      <DialogContent
        {...dialogContentProps}
        sx={{
          paddingX: 3,
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
        }}
      >
        {!hiddenClose && (
          <CustomCloseButton onClick={toggle}>
            <Icon icon="tabler:x" fontSize="1.25rem" />
          </CustomCloseButton>
        )}
        <Box>{children}</Box>
      </DialogContent>

      {!hideButton && (
        <>
          <Divider sx={{ mt: 1 }} />
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 3,
              py: 2,
            }}
          >
            {secondaryAction}

            <Box sx={{ display: "flex", gap: 1 }}>
              {handleDelete && (
                <Button
                  autoFocus
                  color="error"
                  fullWidth
                  variant="outlined"
                  onClick={handleDelete}
                  {...buttonDeleteProps}
                >
                  {buttonDeleteProps?.children || "Hapus"}
                </Button>
              )}
              <Button
                autoFocus
                fullWidth
                variant="outlined"
                onClick={toggle}
                {...buttonCancelProps}
              >
                {buttonCancelProps?.children || "Batal"}
              </Button>
              <Button
                onClick={toggle}
                sx={{ color: "white" }}
                autoFocus
                fullWidth
                variant="contained"
                {...buttonOkProps}
              >
                {isLoading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  buttonOkProps?.children || "Kirim"
                )}
              </Button>
            </Box>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ModalCustom;

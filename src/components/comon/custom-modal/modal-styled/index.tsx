"use client";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { PropsWithChildren, ReactNode, forwardRef } from "react";
import { CustomCloseButton } from "../../custom-button/close-button";

interface ModalProps extends PropsWithChildren, Partial<DialogProps> {
  title: string;
  subtitle?: string;
  buttonOkProps?: ButtonProps;
  buttonCancelProps?: ButtonProps;
  buttonDeleteProps?: ButtonProps;
  dialogQuery?: string;
  customAction?: ReactNode;
  secondaryAction?: ReactNode;
  dialogContentProps?: DialogContentProps;
  open: boolean;
  toggle: () => void;
  hideButton?: boolean;
  isLoading?: boolean;
  handleDelete?: any;
  hiddenClose?: boolean;
  isLoadingModal?: boolean;
  titleColor?: string;
  hideTitle?: boolean;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomStyledModal = (props: ModalProps) => {
  const {
    title,
    // subtitle,
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
    customAction,
    isLoadingModal,
    // titleColor,
    hideTitle,
    ...dialogProps
  } = props;

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onClose = () => {
    if (hiddenClose) {
      toggle();
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      onClose={onClose}
      open={open}
      scroll="body"
      TransitionComponent={Transition}
      {...dialogProps}
      sx={{ "& .MuiDialog-paper": { overflow: "visible" } }}
    >
      {!hideTitle && (
        <>
          <DialogTitle fontWeight={600} sx={{ position: "relative" }}>
            {title}
          </DialogTitle>
          <Divider sx={{ mt: -1 }} />
        </>
      )}
      <DialogContent
        {...dialogContentProps}
        sx={{
          paddingX: 5,
          // paddingTop: 4,
          // backgroundColor: 'red',
          overflow: "hidden",
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

        {/* {!hideTitle && (
          <div>
            {isLoadingModal ? (
              <Skeleton variant="text" width={"500px"} height={"60px"} />
            ) : (
              <p className={`text-xl font-semibold ${titleColor}`}>{title}</p>
            )}
            {isLoadingModal ? (
              <Skeleton variant="text" width={"700px"} height={"40px"} />
            ) : (
              <p className="text-sm text-slate-400">{subtitle}</p>
            )}
          </div>
        )} */}
        {isLoadingModal ? (
          <div className="mt-10 flex justify-center align-middle">
            <CircularProgress />
          </div>
        ) : (
          <div className="">{children}</div>
        )}
      </DialogContent>

      {!hideButton && (
        <>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "40px",
              mr: 4,
              mb: 2,
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
                autoFocus
                fullWidth
                variant="contained"
                sx={{ color: "white" }}
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

      {customAction && (
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="w-full flex justify-end mt-5 mr-[32px] mb-[16px]">
            {customAction}
          </div>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomStyledModal;

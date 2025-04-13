"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { darken } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalEditUserAccount } from "../../modal/edit-user-account";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  // Props
  const { data } = props;

  // Hooks
  const t = useTranslations("comon.tables");

  // State
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  // Handlers
  const toggleDelete = () => setOpenDelete(!openDelete);
  const toggleEdit = () => setOpenEdit(!openEdit);

  return (
    <Box display="flex" gap={0.5} alignItems="center" justifyContent="center">
      {/* Edit */}
      <Tooltip title={t("action.edit")} arrow>
        <IconButton
          size="small"
          onClick={toggleEdit}
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.edit, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons?.edit, 0.2),
            },
            width: 28,
            height: 28,
          })}
        >
          <Icon icon="mdi:pencil-outline" width={17} height={17} />
        </IconButton>
      </Tooltip>

      {/* Hapus */}
      <Tooltip title={t("action.delete")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.delete,
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons?.delete, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={toggleDelete}
        >
          <Icon icon="mdi:delete-outline" width={17} height={17} />
        </IconButton>
      </Tooltip>

      {openDelete && (
        <ModalDelete
          maxWidth="xs"
          name={data.name}
          open={openDelete}
          toggle={toggleDelete}
          handleDelete={toggleDelete}
        />
      )}
      {openEdit && (
        <ModalEditUserAccount
          open={openEdit}
          toggle={toggleEdit}
          // id={data.id}
        />
      )}
    </Box>
  );
};

"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { Box, darken, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalEditPerformancePeriod } from "../modal/edit";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  const { data } = props;

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const t = useTranslations("comon.tables");

  const toggleDelete = () => setOpenDelete(!openDelete);
  const togleEdit = () => setOpenEdit(!openEdit);

  return (
    <Box display="flex" gap={0.5} alignItems="center" justifyContent="center">
      <Tooltip title={t("action.edit")} arrow>
        <IconButton
          size="small"
          onClick={togleEdit}
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
        <ModalEditPerformancePeriod
          open={openEdit}
          toggle={togleEdit}
          id={data.id}
        />
      )}
    </Box>
  );
};

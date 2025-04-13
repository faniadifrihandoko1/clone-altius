"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { darken } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SelectMember } from "../../modal/select-member/select-member";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  // Props
  const { data } = props;

  // Hooks
  const route = useRouter();
  const pathname = usePathname();
  const t = useTranslations("comon.tables");

  // State
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  // Handlers
  const toggleDelete = () => setOpenDelete(!openDelete);
  const toggleSelect = () => setOpenSelect(!openSelect);
  const toggleEdit = () => {
    route.push(`${pathname}/edit/` + data.Id);
  };

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

      {/* Select */}
      <Tooltip title={t("action.select")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons?.select,
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons?.select, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={toggleSelect}
        >
          {/* vaadin:twin-col-select */}
          <Icon icon="iconoir:select-window" width={17} height={17} />
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
      {openSelect && (
        <SelectMember openDialog={openSelect} toggleDialog={toggleSelect} />
      )}
    </Box>
  );
};

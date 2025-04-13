"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { darken } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddUnitWork } from "../modal/add";
import { ModalEmployeePosition } from "../modal/employee-position";
import { ModalLabelPosition } from "../modal/label-position";
import { ModalSortUnitWork } from "../modal/sort-work-unit";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  const { data } = props;
  const t = useTranslations("organization.org-structure.table");

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [openEmployee, setOpenEmployee] = useState<boolean>(false);
  const [openPosition, setOpenPosition] = useState<boolean>(false);
  const toggleDelete = () => setOpenDelete(!openDelete);
  const toggleAdd = () => setOpenAdd(!openAdd);
  const toggleSort = () => setOpenSort(!openSort);
  const toggleEmployee = () => setOpenEmployee(!openEmployee);
  const togglePosition = () => setOpenPosition(!openPosition);

  return (
    <Box
      display="flex"
      gap={0.5}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* Tambah Unit Kerja */}
      <Tooltip title={t("action.add")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.primary.main, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={toggleAdd}
        >
          <Icon icon="mdi:account-multiple-plus" width={18} height={18} />
        </IconButton>
      </Tooltip>

      {/* Pengurutan */}
      <Tooltip title={t("action.sort")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.sort, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons.sort, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={toggleSort}
        >
          <Icon icon="mdi:sort" width={18} height={18} />
        </IconButton>
      </Tooltip>

      {/* Pegawai */}
      <Tooltip title={t("action.employee")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.employee, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons.employee, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={toggleEmployee}
        >
          <Icon icon="mdi:account-group" width={18} height={18} />
        </IconButton>
      </Tooltip>

      {/* Label Jabatan */}
      <Tooltip title={t("action.label")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.label, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons.label, 0.2),
            },
            width: 28,
            height: 28,
          })}
          onClick={togglePosition}
        >
          <Icon icon="mdi:tag-text-outline" width={18} height={18} />
        </IconButton>
      </Tooltip>

      {/* Hapus */}
      <Tooltip title={t("action.delete")} arrow>
        <IconButton
          size="small"
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.delete, // Biru
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
          <Icon icon="mdi:delete-outline" width={18} height={18} />
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
      {openSort && <ModalSortUnitWork open={openSort} toggle={toggleSort} />}
      {openAdd && <ModalAddUnitWork open={openAdd} toggle={toggleAdd} />}
      {openEmployee && (
        <ModalEmployeePosition
          open={openEmployee}
          toggle={toggleEmployee}
          data={data}
        />
      )}
      {openPosition && (
        <ModalLabelPosition open={openPosition} toggle={togglePosition} />
      )}
    </Box>
  );
};

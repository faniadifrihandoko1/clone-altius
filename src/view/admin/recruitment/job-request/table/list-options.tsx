"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { darken, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ModalDetailJobRequest from "../modal/detail";
// import { ModalEditJenisLembur } from "../../edit/edit-jenis-lembur";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  const { data } = props;

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const togleEdit = () => setOpenDetail(!openDetail);
  const toggleDelete = () => setOpenDelete(!openDelete);

  return (
    <>
      <Tooltip title={"detail"} arrow>
        <IconButton
          size="small"
          onClick={togleEdit}
          sx={(theme) => ({
            backgroundColor: theme.palette.icons.detail, // Biru
            color: "white",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: darken(theme.palette.icons?.detail, 0.2),
            },
            width: 28,
            height: 28,
          })}
        >
          <Icon icon="mdi:eye-outline" width={17} height={17} />
        </IconButton>
      </Tooltip>

      {openDetail && (
        <ModalDetailJobRequest open={openDetail} toggle={togleEdit} />
      )}

      {openDelete && (
        <ModalDelete
          maxWidth="xs"
          name={data.jabatan}
          open={openDelete}
          toggle={toggleDelete}
          handleDelete={toggleDelete}
        />
      )}
    </>
  );
};

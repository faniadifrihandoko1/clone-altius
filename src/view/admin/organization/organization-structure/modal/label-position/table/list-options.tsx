"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
// import { ModalEditHariLibur } from "../../edit/edit-hari-libur";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  const { data } = props;

  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const toggleDelete = () => setOpenDelete(!openDelete);

  return (
    <>
      <Tooltip title={"delete"} arrow>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#D32F2F", // Merah lebih soft
            color: "white",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "#B71C1C" },
            width: 32,
            height: 32,
          }}
          onClick={toggleDelete}
        >
          <Icon icon="mdi:delete-outline" width={15} height={15} />
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
    </>
  );
};

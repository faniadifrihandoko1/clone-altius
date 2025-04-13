"use client";
import ModalDelete from "@/components/comon/custom-modal/modal-delete";
import Icon from "@/components/comon/icon";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { ModalEditJenisDokumen } from "../../edit/edit-jenis-dokumen";

interface ListOptionsPropsType {
  data: any;
}

export const ListOptions = (props: ListOptionsPropsType) => {
  const { data } = props;

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const toggleDelete = () => setOpenDelete(!openDelete);
  const togleEdit = () => setOpenEdit(!openEdit);

  return (
    <>
      <IconButton size="small" title="Edit" onClick={togleEdit}>
        <Icon icon="system-uicons:create" />
      </IconButton>

      <IconButton size="small" title="Delete" onClick={toggleDelete}>
        <Icon icon="mingcute:delete-2-line" />
      </IconButton>

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
        <ModalEditJenisDokumen
          open={openEdit}
          toggle={togleEdit}
          id={data.id}
        />
      )}
    </>
  );
};

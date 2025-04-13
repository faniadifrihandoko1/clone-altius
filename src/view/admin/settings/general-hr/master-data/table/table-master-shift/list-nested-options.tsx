"use client";
import Icon from "@/components/comon/icon";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { ModalEditNestedMasterShift } from "../../edit/edit-master-shift/edit-nested-master-shift";
// import { ModalEditHariLibur } from "../../edit/edit-hari-libur";

interface ListOptionsPropsType {
  data: any;
}

export const ListNestedOptions = (props: ListOptionsPropsType) => {
  const { data } = props;

  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const togleEdit = () => setOpenEdit(!openEdit);

  return (
    <>
      <IconButton size="small" title="Edit" onClick={togleEdit}>
        <Icon icon="system-uicons:create" />
      </IconButton>

      {openEdit && (
        <ModalEditNestedMasterShift
          open={openEdit}
          toggle={togleEdit}
          id={data?.id}
        />
      )}
    </>
  );
};

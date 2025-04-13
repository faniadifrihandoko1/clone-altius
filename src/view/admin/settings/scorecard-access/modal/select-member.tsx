"use client";

import { CustomStyledModal } from "@/components/comon/custom-modal";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Stack, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Drag from "../component/drag";

export const SortableItem = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
    padding: "2px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      border: "1px solid #bdbdbd",
    },
  };

  return (
    <ListItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      disablePadding
      sx={{
        "&:hover": {
          backgroundColor: "#f5f5f5",
          border: "1px solid #bdbdbd",
        },
      }}
    >
      {id}
    </ListItem>
  );
};

export const SelectMember = ({
  openDialog,
  toggleDialog,
}: {
  openDialog: boolean;
  toggleDialog: () => void;
}) => {
  return (
    <CustomStyledModal
      open={openDialog}
      title="Pilih Anggota Grup Akses Scorecard Organisasi"
      subtitle={""}
      toggle={toggleDialog}
      maxWidth="sm"
      buttonOkProps={{
        onClick: () => {
          toggleDialog();
        },
      }}
    >
      <Stack spacing={2}>
        <Typography fontSize={16}>
          Grup: <span className="font-bold">Full Access</span>
        </Typography>
        <Drag />
      </Stack>
    </CustomStyledModal>
  );
};

import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import ListIcon from "@mui/icons-material/List";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MouseEvent, useState } from "react";

interface RowAction {
  id: number;
  name: string;
}

const RowOptions = ({ id, name }: RowAction) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  console.log(id, name);

  const rowOptionsOpen = Boolean(anchorEl);

  const [openDetail, setOpenDetail] = useState(false);

  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDetail = () => {
    handleRowOptionsClose();
    setOpenDetail(!openDetail);
  };

  const handleClickEdit = (): void => {
    handleRowOptionsClose();
  };

  const toggleDelete = () => {
    setOpenDelete(!openDelete);
    handleRowOptionsClose();
  };

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem onClick={handleToggleDetail} sx={{ "& svg": { mr: 2 } }}>
          <ListIcon sx={{ fontSize: "18px", marginRight: "8px" }} />
          Detail
        </MenuItem>

        <MenuItem onClick={() => handleClickEdit()} sx={{ "& svg": { mr: 2 } }}>
          <EditIcon sx={{ fontSize: "18px" }} />
          Edit
        </MenuItem>

        <MenuItem onClick={toggleDelete} sx={{ "& svg": { mr: 2 } }}>
          <Delete sx={{ fontSize: "18px" }} />
          Hapus
        </MenuItem>
      </Menu>
    </>
  );
};

export default RowOptions;

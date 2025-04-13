"use client";

import ModalAny from "@/components/comon/custom-modal/modal-any";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddLabelPosition } from "./modal/add";
import { rows, useTableColumns } from "./table/list-columns";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalLabelPosition = ({ open, toggle }: Props) => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const t = useTranslations("organization.org-structure.modal.labelPosition");
  const t2 = useTranslations("comon.modal.add");
  const columns = useTableColumns();
  const toggleAdd = () => setOpenAdd(!openAdd);

  return (
    <ModalAny
      title={t("title")}
      maxWidth="sm"
      open={open}
      toggle={toggle}
      handleSave={() => {}}
    >
      <Box>
        <Button
          variant="contained"
          size="small"
          className="!font-semibold  !text-white "
          sx={{ mb: 1 }}
          onClick={toggleAdd}
        >
          {t2("button.title")}
        </Button>
        <DataGrid
          rows={rows}
          columns={columns}
          showColumnVerticalBorder
          showCellVerticalBorder
          rowHeight={40}
          columnHeaderHeight={30}
          hideFooterPagination
          hideFooter
        />
      </Box>
      {openAdd && <ModalAddLabelPosition open={openAdd} toggle={toggleAdd} />}
    </ModalAny>
  );
};

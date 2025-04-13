"use client";

import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PiEmptyBold } from "react-icons/pi";
import { ModalAddLevelPosisi } from "../../add/add-level-posisi";
import { rows, useTableColumns } from "./list-columns";

export const ListLevelPosisi = () => {
  const columns = useTableColumns();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const toggleAdd = () => setOpenAdd(!openAdd);
  const t = useTranslations("comon.modal.add");

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <ToolbarSectionTableCustom
        toggleAdd={toggleAdd}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
      />
      <DataGrid
        rows={rows}
        columns={columns}
        showColumnVerticalBorder
        showCellVerticalBorder
        rowHeight={40}
        columnHeaderHeight={30}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{
          noRowsOverlay: () => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                py: 2,
                alignItems: "center",
              }}
            >
              <PiEmptyBold size={30} color="#31708f" />
              <Typography variant="body1" color="textSecondary">
                Data Kosong
              </Typography>
            </Box>
          ),
        }}
      />
      {openAdd && <ModalAddLevelPosisi open={openAdd} toggle={toggleAdd} />}
    </Box>
  );
};

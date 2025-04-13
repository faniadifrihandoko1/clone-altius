"use client";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddJenjangPendidikan } from "../../add/add-jenjang-pendidikan";
import { rows, useTableColumns } from "./list-columns";

export const ListJenjangPendidikan = () => {
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
        columnHeaderHeight={40}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
      />
      {openAdd && (
        <ModalAddJenjangPendidikan open={openAdd} toggle={toggleAdd} />
      )}
    </Box>
  );
};

"use client";

import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { usePathname, useRouter } from "next/navigation";
import { columns, rows } from "./list-columns";

export const List = () => {
  const router = useRouter();
  const pathname = usePathname();
  // const locale = useLocale()

  const handleAdd = () => {
    router.push(`${pathname}/create`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        // mt: 2,
      }}
    >
      <ToolbarSectionTableCustom
        toggleAdd={handleAdd}
        addButtonLabel="Tambah"
        sizeButtonAdd="medium"
        disabledFilter
        disabledSearch
      />
      <DataGrid
        rows={rows}
        columns={columns}
        showColumnVerticalBorder
        autoHeight
        // rowHeight={66}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
      />
    </Box>
  );
};

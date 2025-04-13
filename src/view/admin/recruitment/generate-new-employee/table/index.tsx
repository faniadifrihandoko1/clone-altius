"use client";
import CustomNoRowsOverlay from "@/components/comon/custom-table/custom-no-rows";
import PaginationSectionTableCustom from "@/components/comon/custom-table/custom-pagination";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { rows, useTableColumns } from "./list-columns";

export const ListGenerateNewEmployee = () => {
  const columns = useTableColumns();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLimitChange = (event: any) => {
    setIsLoading(true);
    setPageSize(Number(event.target.value));
    setPage(1);

    setTimeout(() => setIsLoading(false), 500);
  };

  const handlePageChange = (event: any, newPage: number) => {
    setIsLoading(true);
    setPage(newPage);

    setTimeout(() => setIsLoading(false), 500);
  };

  const totalRecords = rows.length;
  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <DataGrid
        rows={paginatedRows}
        columns={columns}
        showColumnVerticalBorder
        showCellVerticalBorder
        loading={isLoading}
        columnHeaderHeight={40}
        rowHeight={40}
        pagination
        getRowId={(value) => value.Id}
        hideFooterSelectedRowCount
        hideFooter={rows.length <= 0}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          pagination: () => (
            <Box
              width="100%"
              paddingX={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="0.75rem"
            >
              <PaginationSectionTableCustom
                page={page}
                pageSize={pageSize}
                recordsFiltered={totalRecords}
                handleLimitChange={handleLimitChange}
                handlePageChange={handlePageChange}
              />
            </Box>
          ),
        }}
      />
    </Box>
  );
};

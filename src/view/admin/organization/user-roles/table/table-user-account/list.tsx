"use client";
import PaginationSectionTableCustom from "@/components/comon/custom-table/custom-pagination";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { rows, useTableColumns } from "./list-columns";

const ListUserAccount = () => {
  const columns = useTableColumns();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const totalRecords = rows.length; // Ambil jumlah total data

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

  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);
  return (
    <DataGrid
      rows={paginatedRows}
      columns={columns}
      showColumnVerticalBorder
      showCellVerticalBorder
      rowHeight={40}
      loading={isLoading}
      getRowId={(row) => row.Id}
      columnHeaderHeight={40}
      pagination
      hideFooterSelectedRowCount
      slots={{
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
  );
};

export default ListUserAccount;

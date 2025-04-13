"use client";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useState } from "react";
// import { ModalAddAgama } from "../../add/add-agama";
import CustomNoRowsOverlay from "@/components/comon/custom-table/custom-no-rows";
import PaginationSectionTableCustom from "@/components/comon/custom-table/custom-pagination";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import ModalAddCandidateEmployee from "../modal/add";
import { rows, useTableColumns } from "./list-columns";

export const ListCandidateEmployee = () => {
  const columns = useTableColumns();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toggleAdd = () => setOpenAdd(!openAdd);
  const t = useTranslations("comon.modal.add");

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
      {/* <ToolbarSectionTableCustom
        toggleAdd={toggleAdd}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
      /> */}

      <ToolbarSectionTableCustom
        toggleAdd={toggleAdd}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
      />
      <DataGrid
        rows={paginatedRows}
        columns={columns}
        showColumnVerticalBorder
        showCellVerticalBorder
        loading={isLoading}
        columnHeaderHeight={40}
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
      {openAdd && (
        <ModalAddCandidateEmployee open={openAdd} toggle={toggleAdd} />
      )}
    </Box>
  );
};

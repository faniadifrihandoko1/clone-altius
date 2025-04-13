"use client";
import GlobalTableNested from "@/components/comon/custom-table/custom-table-nested";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddCompetencyDictionary } from "../modal/add";
import { ModalAddChildCompetencyDictionary } from "../modal/add-child";
import { ModalCopyOtherPeriod } from "../modal/copy";
import { ModalSortElement } from "../modal/sort";
import {
  dataNested,
  rows,
  useTableColumns,
  useTableNestedColumn,
} from "./list-columns";
// import { ModalAddMasterDataPosition } from "../modal/add";

export const ListCompetencyDictionary = () => {
  const columns = useTableColumns();
  const nestedColumns = useTableNestedColumn();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openAddNested, setOpenAddNested] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [openCopy, setOpenCopy] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toggleAdd = () => setOpenAdd(!openAdd);
  const toggleAddNested = () => setOpenAddNested(!openAddNested);
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
  console.log(isLoading);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <ToolbarSectionTableCustom
        toggleAdd={toggleAdd}
        onCopy={() => setOpenCopy(!openCopy)}
        onSort={() => setOpenSort(!openSort)}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
      />

      <GlobalTableNested
        // ingat width arow 5% dan action 10%
        columns={columns}
        rows={paginatedRows}
        showBorder={true}
        pagination={true}
        page={page}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        recordsFiltered={totalRecords}
        renderNestedTable={(nestedRows) => {
          const dataFilter = dataNested?.find(
            (row) => row.CompetencyDictionaryId === nestedRows.Id
          );

          return (
            <GlobalTableNested
              columns={nestedColumns}
              rows={dataFilter?.Data || []}
              showBorder={true}
              showAdd
              toggleAdd={toggleAddNested}
            />
          );
        }}
      />

      {openAdd && (
        <ModalAddCompetencyDictionary open={openAdd} toggle={toggleAdd} />
      )}
      {openAddNested && (
        <ModalAddChildCompetencyDictionary
          open={openAddNested}
          toggle={toggleAddNested}
        />
      )}
      {openSort && (
        <ModalSortElement open={openSort} toggle={() => setOpenSort(false)} />
      )}
      {openCopy && (
        <ModalCopyOtherPeriod
          open={openCopy}
          toggle={() => setOpenCopy(false)}
        />
      )}
    </Box>
  );
};

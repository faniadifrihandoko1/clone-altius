"use client";
import GlobalTableNested from "@/components/comon/custom-table/custom-table-nested";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddJenisLembur } from "../../add/add-jenis-lembur";
import { ModalAddNestedJenisLembur } from "../../add/add-jenis-lembur/add-nested-jenis-lembur";
import { rows, useTableColumns, useTableNestedColumn } from "./list-columns";

export const ListJenisLembur = () => {
  const columns = useTableColumns();
  const nestedColumns = useTableNestedColumn();
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openAddNested, setOpenAddNested] = useState<boolean>(false);
  const toggleAdd = () => setOpenAdd(!openAdd);
  const t = useTranslations("comon.modal.add");
  const toggleAddNested = () => setOpenAddNested(!openAddNested);

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

      <GlobalTableNested
        // ingat width arow 5% dan action 10%
        columns={columns}
        rows={rows}
        showBorder={true}
        pagination={true}
        page={1}
        pageSize={10}
        recordsFiltered={10}
        renderNestedTable={(row) => (
          <>
            <GlobalTableNested
              columns={nestedColumns}
              rows={row?.lembur}
              showBorder={true}
              showAdd
              toggleAdd={toggleAddNested}
            />
          </>
        )}
      />
      {openAdd && <ModalAddJenisLembur open={openAdd} toggle={toggleAdd} />}
      {openAddNested && (
        <ModalAddNestedJenisLembur
          open={openAddNested}
          toggle={toggleAddNested}
        />
      )}
    </Box>
  );
};

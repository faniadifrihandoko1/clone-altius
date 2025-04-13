"use client";
import GlobalTableNested from "@/components/comon/custom-table/custom-table-nested";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddMasterShift } from "../../add/add-master-shift";
import { columns, columnsNested, rows } from "./list-columns";

export const ListMasterShift = () => {
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

      <GlobalTableNested
        // ingat width arow 5% dan action 10%
        columns={columns}
        rows={rows}
        showBorder={true}
        // showAction={true}
        // renderAction={(row) => <ListOptions data={row} />}
        // actionWidth="15%"
        pagination={true}
        page={1}
        pageSize={10}
        recordsFiltered={10}
        renderNestedTable={(row) => {
          return (
            <>
              <GlobalTableNested
                columns={columnsNested}
                rows={row.days}
                showBorder={true}
              />
            </>
          );
        }}
      />
      {openAdd && <ModalAddMasterShift open={openAdd} toggle={toggleAdd} />}
    </Box>
  );
};

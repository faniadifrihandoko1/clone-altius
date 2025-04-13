"user client";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalAddUserAccount } from "../../modal/add-user-account";
import { exportToCSV } from "../../utils/export-csv";
import { exportToExcels } from "../../utils/export-excel";
import ListUserAccount from "./list";
import { rows, useTableColumns } from "./list-columns";

const TableUserAccount = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const columns = useTableColumns();

  const t = useTranslations("comon.modal.add");

  const toggleAdd = () => {
    setOpenAdd(!openAdd);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <ToolbarSectionTableCustom
        toggleAdd={toggleAdd}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
        showExport
        onExportExcel={() => exportToExcels(columns, rows, "User Account")}
        onExportCSV={() => exportToCSV(columns, rows, "User Account")}
      />
      <ListUserAccount />
      {openAdd && <ModalAddUserAccount open={openAdd} toggle={toggleAdd} />}
    </Box>
  );
};

export default TableUserAccount;

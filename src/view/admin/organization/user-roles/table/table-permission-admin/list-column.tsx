"use client";
import { Column } from "@/components/comon/custom-table/custom-tree-table/row-tree-node";
import { Checkbox } from "@mui/material";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function useTableColumns() {
  const t = useTranslations(
    "organization.user-roles.create.tables.adminPermission"
  );
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: adminPermission");
      return [];
    }
    const columns: Column[] = [
      {
        field: tableHead[1]?.nameField,
        headName: tableHead[1]?.title,
        alignHeader: "center",
        width: "80%",
        renderCell: (node) => (
          <>
            <Checkbox sx={{ fontSize: "12px" }} checked={node?.value} />
            {node.MenuCaption}
          </>
        ),
      },
      // {
      //   field: tableHead[1]?.nameField,
      //   headName: tableHead[1]?.title,
      //   alignHeader: "center",
      //   align: "center",
      //   width: "20%",
      //   renderCell: (node) => (
      //     <Checkbox sx={{ fontSize: "12px" }} checked={node?.value} />
      //   ),
      // },
    ];

    return columns;
  }, [tableHead]);
}

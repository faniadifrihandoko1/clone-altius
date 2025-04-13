"use client";
import { Column } from "@/components/comon/custom-table/custom-tree-table/row-tree-node";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("organization.org-structure.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: leaveTypes");
      return [];
    }
    const columns: Column[] = [
      {
        field: tableHead[0]?.nameField || "NameAsWorkUnit",
        headName: tableHead[0]?.title || "Nama Unit Kerja",
        alignHeader: "center",
        width: "35%",
      },
      {
        field: tableHead[1]?.nameField || "NameAsJobTitle",
        headName: tableHead[1]?.title || "Nama Jabatan",
        alignHeader: "center",
        align: "center",

        width: "15%",
      },
      {
        field: tableHead[2]?.nameField || "IncumbentFullName",
        headName: tableHead[2]?.title || "Dijabat Oleh",
        alignHeader: "center",
        align: "center",

        width: "15%",
      },
      {
        field: tableHead[3]?.nameField || "AssessorName",
        headName: tableHead[3]?.title || "Penilai",
        alignHeader: "center",
        align: "center",

        width: "15%",
      },
      {
        field: tableHead[4]?.nameField || "action",
        headName: tableHead[4]?.title || "Action",
        alignHeader: "center",
        align: "center",
        width: "30%",
        renderCell: (node) => {
          return <ListOptions data={node} />;
        },
      },
    ];

    return columns;
  }, [tableHead]);
}

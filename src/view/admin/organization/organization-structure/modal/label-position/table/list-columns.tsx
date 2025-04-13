"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations(
    "organization.org-structure.modal.labelPosition.table"
  );
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: leaveTypes");
      return [];
    }
    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "label",
        headerName: tableHead[0]?.title || "Label",
        headerAlign: "center",
        flex: 2, // Lebih lebar sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField || "content",
        headerName: tableHead[1]?.title || "Isi",
        headerAlign: "center",
        align: "center",
        flex: 2, // Lebih lebar sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[3]?.nameField || "action",
        headerName: tableHead[3]?.title || "Action",
        flex: 1,
        sortable: false,
        filterable: false,
        editable: false,
        hideable: false,
        align: "center",
        headerAlign: "center",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: ({ row }) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export const rows = [
  // {
  //   id: 1,
  //   label: "Cuti Menikah",
  //   content: "3 Hari",
  // },
];

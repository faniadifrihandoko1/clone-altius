"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.category.tables.employmentStatus");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!tableHead || !Array.isArray(tableHead)) {
      console.warn(`Table head not found for module: ${module}`);
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField ?? "name",
        headerName: tableHead[0]?.title ?? "Nama",
        flex: 0.75,
        editable: false,
        headerAlign: "left",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField ?? "action",
        headerName: tableHead[1]?.title ?? "Aksi",
        flex: 0.25,
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
  { id: 1, name: "Permanen" },
  { id: 2, name: "Magang Full Time" },
  { id: 3, name: "Magang Part Time" },
  { id: 4, name: "Kontrak" },
  { id: 5, name: "Harian" },
];

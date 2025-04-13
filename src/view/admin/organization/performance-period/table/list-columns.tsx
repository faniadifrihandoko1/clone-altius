"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("organization.performance-period.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: performance-period");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "name",
        headerName: tableHead[0]?.title || "Performance Period",
        flex: 0.25, // 75% dari total lebar tabel
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField || "startDate",
        headerName: tableHead[1]?.title || "Start Date",
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField || "endDate",
        headerName: tableHead[2]?.title || "End Date",
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[3]?.nameField || "action",
        headerName: tableHead[3]?.title || "Aksi",
        flex: 0.25, // 25% dari total lebar tabel
        sortable: false,
        filterable: false,
        editable: false,
        hideable: false,
        align: "center",
        headerAlign: "center",
        display: "flex",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: ({ row }) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export const rows = [
  { id: 1, name: "Tahun 2022", startDate: "2022-01-01", endDate: "2022-12-31" },
  { id: 2, name: "Tahun 2023", startDate: "2023-01-01", endDate: "2023-12-31" },
  { id: 3, name: "Tahun 2024", startDate: "2024-01-01", endDate: "2024-12-31" },
  { id: 4, name: "Tahun 2025", startDate: "2025-01-01", endDate: "2025-12-31" },
  { id: 5, name: "Tahun 2026", startDate: "2026-01-01", endDate: "2026-12-31" },
];

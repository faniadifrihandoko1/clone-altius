"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.references.tables.division");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: division");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "name",
        headerName: tableHead[0]?.title || "Nama",
        flex: 0.75, // 75% dari total lebar tabel
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[1]?.nameField || "action",
        headerName: tableHead[1]?.title || "Aksi",
        flex: 0.25, // 25% dari total lebar tabel
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
  {
    id: 1,
    name: "Penjualan",
  },
  {
    id: 2,
    name: "Layanan Pelanggan",
  },
  { id: 3, name: "Teknologi Informasi" },
  { id: 4, name: "Logistik" },

  { id: 5, name: "Produksi" },
  { id: 6, name: "HRD" },
];

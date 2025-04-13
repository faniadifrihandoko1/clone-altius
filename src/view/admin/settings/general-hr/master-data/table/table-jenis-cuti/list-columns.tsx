"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.masterData.tables.leaveTypes");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: leaveTypes");
      return [];
    }
    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "name",
        headerName: tableHead[0]?.title || "Nama",
        headerAlign: "center",
        flex: 2, // Lebih lebar sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField || "quota",
        headerName: tableHead[1]?.title || "Kuota",
        headerAlign: "center",
        align: "center",
        flex: 1.5, // Lebih lebar sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField || "annualLeave",
        headerName: tableHead[2]?.title || "Cuti Tahunan?",
        headerAlign: "center",
        align: "center",
        flex: 1, // Lebih kecil sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[3]?.nameField || "action",
        headerName: tableHead[3]?.title || "Action",
        flex: 0.75,
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
    name: "Cuti Menikah",
    quota: "3 Hari",
    annualLeave: "Tidak",
  },
  {
    id: 2,
    name: "Cuti Tahunan",
    quota: "12 Hari",
    annualLeave: "Ya",
  },
  { id: 3, name: "Cuti Hamil", quota: "3 Hari", annualLeave: "Tidak" },
  {
    id: 4,
    name: "Cuti Haji",
    quota: "3 Hari",
    annualLeave: "Tidak",
  },
  {
    id: 5,
    name: "Ibu melahirkan",
    quota: "30 Hari",
    annualLeave: "Tidak",
  },
  {
    id: 6,
    name: "Cuti Tidak Dibayar",
    quota: "99 Hari",
    annualLeave: "Tidak",
  },
];

"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.references.tables.holidayMaster");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: holidayMaster");
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
        field: tableHead[1]?.nameField || "tanggal",
        headerName: tableHead[1]?.title || "Tanggal",
        headerAlign: "center",
        align: "center",
        flex: 1.5, // Lebih lebar sesuai dengan gambar
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField || "cutiBersama",
        headerName: tableHead[2]?.title || "Cuti Bersama?",
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
    name: "Hari Kemerdekaan Indonesia",
    date: "17 August 2024",
    jointLeave: "",
  },
  {
    id: 2,
    name: "Hari Raya Idul Adha 1445 Hijriah",
    date: "17 June 2024",
    jointLeave: "",
  },
  { id: 3, name: "Natal", date: "25 December 2023", jointLeave: "" },
  {
    id: 4,
    name: "Maulid Nabi Muhammad SAW",
    date: "28 September 2023",
    jointLeave: "",
  },
  {
    id: 5,
    name: "Hari Kemerdekaan Indonesia",
    date: "17 August 2023",
    jointLeave: "",
  },
  {
    id: 6,
    name: "Hari Raya Idul Fitri.",
    date: "23 April 2023",
    jointLeave: "",
  },
  {
    id: 7,
    name: "Hari Raya Idul Fitri",
    date: "22 April 2023",
    jointLeave: "",
  },
  {
    id: 8,
    name: "Wafat Isa Almasih",
    date: "07 April 2023",
    jointLeave: "",
  },
];

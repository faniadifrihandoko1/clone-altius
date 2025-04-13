"use client";
import { Column } from "@/components/comon/custom-table/custom-table";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListNestedOptions } from "./list-nested-options";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.masterData.tables.overtimeTypes");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: overtimeTypes");
      return [];
    }

    const columns: Column[] = [
      {
        field: tableHead[1]?.nameField || "jabatan",
        headerName: tableHead[1]?.title || "Jabatan",
        alignHeader: "center",
        alignRow: "left",
        width: "50%",
        sortable: true,
        searchable: true,
      },
      {
        field: tableHead[2]?.nameField || "salary",
        headerName: tableHead[2]?.title || "Salary",
        alignHeader: "center",
        alignRow: "center",
        width: "20%",
        searchable: true,
        sortable: true,
      },
      {
        field: tableHead[3]?.nameField || "nilai",
        headerName: tableHead[3]?.title || "Nilai",
        alignHeader: "center",
        alignRow: "center",
        width: "15%",
      },
      {
        field: tableHead[4]?.nameField || "action",
        headerName: tableHead[4]?.title || "Action",
        alignHeader: "center",
        alignRow: "center",
        width: "10%",
        renderCell: ({ row }) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export function useTableNestedColumn() {
  const t = useTranslations("general-hr.masterData.tables.overtimeTypes");
  const tableHeadChildren = t.raw("tableHeadChildren");

  return useMemo(() => {
    if (!Array.isArray(tableHeadChildren)) {
      console.warn("Table head not found for module: overtimeTypes");
      return [];
    }

    const columns: Column[] = [
      {
        field: tableHeadChildren[0]?.nameField || "jamkerja",
        headerName: tableHeadChildren[0]?.title || "Jam Kerja",
        width: "50%",
      },
      {
        field: tableHeadChildren[1]?.nameField || "value",
        headerName: tableHeadChildren[1]?.title || "Nilai",
        width: "40%",
      },
      {
        field: tableHeadChildren[2]?.nameField || "action",
        headerName: tableHeadChildren[2]?.title || "Action",
        width: "10%",
        renderCell: ({ row }) => <ListNestedOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHeadChildren]);
}

export const rows = [
  {
    id: 1,
    position: "Direktur",
    salary: "Rp. 1.000.000",
    value: "200000",
    lembur: [{ workingHours: "90 Menit", value: "40000" }],
  },
  {
    id: 2,
    position: "Manager",
    salary: "Rp. 9.000.000",
    value: "100000",
    lembur: [],
  },
];

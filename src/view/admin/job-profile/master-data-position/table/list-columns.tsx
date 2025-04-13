"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("job-profile.master-position.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: master-position");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        flex: 0.25,
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        flex: 0.25,
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
        flex: 0.5,
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[3]?.nameField,
        headerName: tableHead[3]?.title,
        flex: 0.25,
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
  {
    Id: 1000043,
    Name: "Teknis",
    FluencyLevel: 0,
    IsAppraisal: true,
    DataPeriodId: 1000296,
    ItemOrder: null,
    Weight: 60.0,
  },
  {
    Id: 1000044,
    Name: "Managerial",
    FluencyLevel: 0,
    IsAppraisal: true,
    DataPeriodId: 1000296,
    ItemOrder: null,
    Weight: 40.0,
  },
];

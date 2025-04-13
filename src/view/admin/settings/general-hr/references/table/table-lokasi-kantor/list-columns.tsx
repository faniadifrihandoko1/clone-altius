"use client";

import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("general-hr.references.tables.officeLocation");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: officeLocation");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "name",
        headerName: tableHead[0]?.title || "Nama",
        headerAlign: "center",
        flex: 1.5, // Lebih lebar dari yang lain
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField || "latitude",
        headerName: tableHead[1]?.title || "Latitude",
        headerAlign: "center",
        align: "center",
        flex: 1,
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField || "longitude",
        headerName: tableHead[2]?.title || "Longitude",
        headerAlign: "center",
        align: "center",
        flex: 1,
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[3]?.nameField || "jarak",
        headerName: tableHead[3]?.title || "Jarak Radius Absen (M)",
        headerAlign: "center",
        align: "center",
        flex: 1,
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[4]?.nameField || "timezone",
        headerName: tableHead[4]?.title || "Timezone",
        headerAlign: "center",
        align: "center",
        flex: 0.5,
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[5]?.nameField || "action",
        headerName: tableHead[5]?.title || "Action",
        flex: 0.75, // Lebih kecil dibandingkan yang lain
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
    name: "Kantor Pusat altius-demo",
    latitude: -6.152488299120827,
    longitude: 106.90375469848632,
    radius: 40,
    timezone: 7,
  },
  {
    id: 2,
    name: "Cabang Manado",
    latitude: -3.2220872302341563,
    longitude: 130.0916018359375,
    radius: 60,
    timezone: 9,
  },
  {
    id: 3,
    name: "Medan",
    latitude: 3.585394274865749,
    longitude: 98.6926760546875,
    radius: 60,
    timezone: 7,
  },
];

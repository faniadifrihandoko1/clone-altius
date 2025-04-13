"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("organization.user-roles.tables.userRole");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: User Role");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField || "name",
        headerName: tableHead[0]?.title || "Nama",
        flex: 0.25, // 75% dari total lebar tabel
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        flex: 0.5, // 75% dari total lebar tabel
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
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
  {
    Id: 88,
    Name: "Admin - altius-demo",
    Description: "Peran ini dapat mengakses semua menu di dalam aplikasi",
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000124,
    Name: "Admin - HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000274,
    Name: "Admin Payroll",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 89,
    Name: "Pegawai-Altius",
    Description: "Role Sebagai Pegawai",
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000118,
    Name: "Peran HR Payroll",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000119,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000120,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000121,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000122,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000123,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
  {
    Id: 1000128,
    Name: "Peran HR Strategic",
    Description: null,
    CustomerId: "1212",
    PageMenuIdForLandingPage: 0,
    BelongToSystem: false,
    SystemGenerated: false,
    PageMenuDDL: null,
    CustomerName: "PT. Tekno Logika",
    ShowEditButton: true,
    ShowDeleteButton: true,
    QuotaLimit: 0,
  },
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("recruitment.candidat-employee.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: performance-period");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[3]?.nameField,
        headerName: tableHead[3]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[4]?.nameField,
        headerName: tableHead[4]?.title,
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
    Id: 1,
    FullName: "Eva Susanti",
    IdentityNumber: "65654444567699",
    JobName: "Designer #1",
    ProspectiveEmployeeStatusName: "Telah diterima sebagai pegawai",
    ProspectiveEmployeeStatusId: 2,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 3,
    FullName: "Maya Melina",
    IdentityNumber: "65654444567674",
    JobName: "Designer #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 4,
    FullName: "Lutfi Aji",
    IdentityNumber: "6565444456768",
    JobName: "Designer #1",
    ProspectiveEmployeeStatusName: "Telah diterima sebagai pegawai",
    ProspectiveEmployeeStatusId: 2,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 7,
    FullName: "Tri Cahyana",
    IdentityNumber: "65654444567673",
    JobName: "IT Security #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 8,
    FullName: "Iwan Sumpena",
    IdentityNumber: "6565444456454",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 9,
    FullName: "Shella Fachrizal",
    IdentityNumber: "65654444567679",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
];

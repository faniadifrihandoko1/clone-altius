"use client";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function useTableColumns() {
  const t = useTranslations("recruitment.generate-new-employee.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: generate-new-employee");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        flex: 0.25,
        headerAlign: "center",
        align: "center",
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
        flex: 0.25,
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[3]?.nameField,
        headerName: tableHead[3]?.title,
        flex: 0.25,
        align: "center",
        headerAlign: "center",
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },

      {
        field: tableHead[4]?.nameField,
        headerName: tableHead[4]?.title,
        flex: 0.25,
        sortable: false,
        filterable: false,
        editable: false,
        hideable: false,
        align: "center",
        headerAlign: "center",
        display: "flex",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
    ];

    return columns;
  }, [tableHead]);
}

export const rows = [
  {
    Id: 2,
    SubmissionNumber: "PT121223000000",
    LaborDemandStatus: 1,
    LaborDemandStatusName: "Dalam Proses wawancara",
    JobName: "Developer #1",
    ProspectiveEmployeeId: 1,
    FirstName: "Eva",
    LastName: "Susanti",
    FullName: "Eva Susanti",
    IdentityNumber: "65654444567699",
  },
  {
    Id: 6,
    SubmissionNumber: "PT121224000000",
    LaborDemandStatus: 1,
    LaborDemandStatusName: "Dalam Proses wawancara",
    JobName: "IT Security #1",
    ProspectiveEmployeeId: 0,
    FirstName: null,
    LastName: null,
    FullName: null,
    IdentityNumber: null,
  },
  {
    Id: 12,
    SubmissionNumber: "PT121224000003",
    LaborDemandStatus: 0,
    LaborDemandStatusName: "Menunggu",
    JobName: "Relationship Manager",
    ProspectiveEmployeeId: 0,
    FirstName: null,
    LastName: null,
    FullName: null,
    IdentityNumber: null,
  },
  {
    Id: 16,
    SubmissionNumber: "PT121224000011",
    LaborDemandStatus: 0,
    LaborDemandStatusName: "Menunggu",
    JobName: "Relationship Manager",
    ProspectiveEmployeeId: 0,
    FirstName: null,
    LastName: null,
    FullName: null,
    IdentityNumber: null,
  },
  {
    Id: 17,
    SubmissionNumber: "PT121224000013",
    LaborDemandStatus: 0,
    LaborDemandStatusName: "Menunggu",
    JobName: "Relationship Manager",
    ProspectiveEmployeeId: 0,
    FirstName: null,
    LastName: null,
    FullName: null,
    IdentityNumber: null,
  },
];

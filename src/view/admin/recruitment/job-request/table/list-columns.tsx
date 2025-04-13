"use client";
import { Column } from "@/components/comon/custom-table/custom-table";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";
// import { ListNestedOptions } from "./list-nested-options";
// import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("recruitment.job-request.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: overtimeTypes");
      return [];
    }

    const columns: Column[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        alignHeader: "center",
        alignRow: "left",
        width: "15%",
        sortable: true,
        searchable: true,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        alignHeader: "center",
        alignRow: "center",
        width: "15%",
        searchable: true,
        sortable: true,
      },
      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
        alignHeader: "center",
        alignRow: "center",
        width: "15%",
      },
      {
        field: tableHead[3]?.nameField,
        headerName: tableHead[3]?.title,
        alignHeader: "center",
        alignRow: "center",
        width: "15%",
      },
      {
        field: tableHead[4]?.nameField,
        headerName: tableHead[4]?.title,
        alignHeader: "center",
        alignRow: "center",
        width: "15%",
      },
      {
        field: tableHead[5]?.nameField || "action",
        headerName: tableHead[5]?.title || "Action",
        alignHeader: "center",
        alignRow: "center",
        width: "10%",
        renderCell: (row) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export function useTableNestedColumn() {
  const t = useTranslations("recruitment.job-request.table");
  const tableHeadChildren = t.raw("tableHeadChildren");

  return useMemo(() => {
    if (!Array.isArray(tableHeadChildren)) {
      console.warn("Table head not found for module: overtimeTypes");
      return [];
    }

    const columns: Column[] = [
      {
        field: tableHeadChildren[0]?.nameField,
        headerName: tableHeadChildren[0]?.title,
        width: "15%",
      },
      {
        field: tableHeadChildren[1]?.nameField,
        headerName: tableHeadChildren[1]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
      },
      {
        field: tableHeadChildren[2]?.nameField,
        headerName: tableHeadChildren[2]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
      },
      {
        field: tableHeadChildren[3]?.nameField,
        headerName: tableHeadChildren[3]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
      },
      {
        field: tableHeadChildren[4]?.nameField,
        headerName: tableHeadChildren[4]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
      },
      {
        field: tableHeadChildren[5]?.nameField,
        headerName: tableHeadChildren[5]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
      },
    ];

    return columns;
  }, [tableHeadChildren]);
}

export const rows = [
  {
    Id: 2,
    SubmissionNumber: "PT121223000000",
    DepartementName: "Dev IT",
    SubmissionTypeDescription: "Penambahan",
    SubmissionStatusDescription: "Dalam Proses wawancara",
    SubmisionType: 1,
    SubmissionStatus: 1,
    JobName: "Developer #1",
  },
  {
    Id: 16,
    SubmissionNumber: "PT121224000011",
    DepartementName: "PT altius-demo",
    SubmissionTypeDescription: "Penambahan",
    SubmissionStatusDescription: "Menunggu",
    SubmisionType: 1,
    SubmissionStatus: 0,
    JobName: "Relationship Manager",
  },
  {
    Id: 17,
    SubmissionNumber: "PT121224000013",
    DepartementName: "Dev IT",
    SubmissionTypeDescription: "Penambahan",
    SubmissionStatusDescription: "Menunggu",
    SubmisionType: 1,
    SubmissionStatus: 0,
    JobName: "Relationship Manager",
  },
  {
    Id: 6,
    SubmissionNumber: "PT121224000000",
    DepartementName: "Dev IT",
    SubmissionTypeDescription: "Penambahan",
    SubmissionStatusDescription: "Dalam Proses wawancara",
    SubmisionType: 1,
    SubmissionStatus: 1,
    JobName: "IT Security #1",
  },
  {
    Id: 12,
    SubmissionNumber: "PT121224000003",
    DepartementName: "Dev IT",
    SubmissionTypeDescription: "Penambahan",
    SubmissionStatusDescription: "Menunggu",
    SubmisionType: 1,
    SubmissionStatus: 0,
    JobName: "Relationship Manager",
  },
];

export const dataNested = [
  {
    id: 1,
    SubmissionNumber: "PT121223000000",
    children: [
      {
        Id: 3,
        ProspectiveEmployeeName: "Eva Susanti",
        ProspectiveEmployeeIdentityNumber: "65654444567699",
        LaborDemandJobName: "Developer #1",
        LaborDemandDepartmentName: "Dev IT",
        InterviewFormStatus: "Diterima",
        SubmissionNumber: null,
        InterviewFormStatusId: 2,
        InterViewerName: "Dendi Maulana",
        InterviewDate: "2023-04-13T00:00:00",
        InterviewFormTypeName: "Wawancara Ke 1",
      },
      {
        Id: 6,
        ProspectiveEmployeeName: "Maya Melina",
        ProspectiveEmployeeIdentityNumber: "65654444567674",
        LaborDemandJobName: "Developer #1",
        LaborDemandDepartmentName: "Dev IT",
        InterviewFormStatus: "Dalam Progres",
        SubmissionNumber: null,
        InterviewFormStatusId: 0,
        InterViewerName: "Andi Wirajaya",
        InterviewDate: null,
        InterviewFormTypeName: "Wawancara Ke 1",
      },
    ],
  },
  {
    id: 2,
    SubmissionNumber: "PT121224000000",
    children: [
      {
        Id: 4,
        ProspectiveEmployeeName: "Tri Cahyana",
        ProspectiveEmployeeIdentityNumber: "65654444567673",
        LaborDemandJobName: "IT Security #1",
        LaborDemandDepartmentName: "Dev IT",
        InterviewFormStatus: "Dalam Progres",
        SubmissionNumber: null,
        InterviewFormStatusId: 0,
        InterViewerName: "Dendi Maulana",
        InterviewDate: null,
        InterviewFormTypeName: "Wawancara Ke 1",
      },
    ],
  },
];

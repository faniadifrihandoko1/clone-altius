"use client";
import { Column } from "@/components/comon/custom-table/custom-table";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ChildListOptions } from "./child-list-options";
import { ListOptions } from "./list-options";
// import { ListNestedOptions } from "./list-nested-options";
// import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("job-profile.competency-dictionary.table");
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
        width: "40%",
        sortable: true,
        searchable: true,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        alignHeader: "center",
        alignRow: "center",
        width: "40%",
        searchable: true,
        sortable: true,
      },
      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
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
  const t = useTranslations("job-profile.competency-dictionary.table");
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
      {
        field: tableHeadChildren[6]?.nameField,
        headerName: tableHeadChildren[6]?.title,
        width: "15%",
        alignHeader: "center",
        alignRow: "center",
        renderCell: (row) => <ChildListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHeadChildren]);
}

export const rows = [
  {
    Id: 354,
    DataPeriodId: 0,
    CompetencyClusterFormId: 11,
    Name: "Keterampilan",
    Definition: "Keterampilan",
    TargetProfLevel: 5.0,
    ActualProfLevel: 1.0,
    CompetencyDictionaryDetails: [
      {
        Id: 825,
        CompetencyDictionaryId: 354,
        KeyBehavior: "Keterampilan 1",
        ProfLevel1: "buruk sekali",
        ProfLevel2: "buruk",
        ProfLevel3: "sedang",
        ProfLevel4: "baik",
        ProfLevel5: "baik sekali",
        TargetProfLevel: 5.0,
        ActualProfLevel: 1.0,
      },
    ],
  },
  {
    Id: 355,
    DataPeriodId: 0,
    CompetencyClusterFormId: 11,
    Name: "Aspek pengetahuan",
    Definition: "Aspek pengetahuan",
    TargetProfLevel: 5.0,
    ActualProfLevel: 1.0,
    CompetencyDictionaryDetails: [
      {
        Id: 826,
        CompetencyDictionaryId: 355,
        KeyBehavior: "Aspek pengetahuan 1",
        ProfLevel1: "buruk sekali",
        ProfLevel2: "buruk",
        ProfLevel3: "sedang",
        ProfLevel4: "baik",
        ProfLevel5: "baik sekali",
        TargetProfLevel: 5.0,
        ActualProfLevel: 1.0,
      },
    ],
  },
];

export const dataNested = [
  {
    id: 1,
    CompetencyDictionaryId: 354,
    Data: [
      {
        Id: 825,
        CompetencyDictionaryId: 354,
        KeyBehavior: "Keterampilan 1",
        ProfLevel1: "buruk sekali",
        ProfLevel2: "buruk",
        ProfLevel3: "sedang",
        ProfLevel4: "baik",
        ProfLevel5: "baik sekali",
        TargetProfLevel: 5.0,
        ActualProfLevel: 1.0,
      },
    ],
  },
  {
    id: 2,
    CompetencyDictionaryId: 355,
    Data: [
      {
        Id: 826,
        CompetencyDictionaryId: 355,
        KeyBehavior: "Aspek pengetahuan 1",
        ProfLevel1: "buruk sekali",
        ProfLevel2: "buruk",
        ProfLevel3: "sedang",
        ProfLevel4: "baik",
        ProfLevel5: "baik sekali",
        TargetProfLevel: 5.0,
        ActualProfLevel: 1.0,
      },
    ],
  },
];

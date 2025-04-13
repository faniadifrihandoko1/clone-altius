"use client";

import ModalAny from "@/components/comon/custom-modal/modal-any";
import { CustomTreeTable } from "@/components/comon/custom-table/custom-tree-table";
import { Column } from "@/components/comon/custom-table/custom-tree-table/row-tree-node";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalSelectUnitWork: React.FC<Props> = ({ open, toggle }) => {
  const t = useTranslations(
    "job-profile.competency-profile.modal.select-unit-work"
  );
  const columns = useTableColumns();

  return (
    <ModalAny
      title={t("title")}
      maxWidth="sm"
      open={open}
      toggle={toggle}
      handleSave={() => {}}
      buttonOkName={t("button")}
    >
      <CustomTreeTable
        columns={columns}
        rows={treeData}
        showBorder={true}
        rowHeight={40}
        columnHeaderHeight={35}
        showButtons={{}}
      />
    </ModalAny>
  );
};

function useTableColumns() {
  const t = useTranslations("organization.org-structure.table");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: leaveTypes");
      return [];
    }
    const columns: Column[] = [
      {
        field: tableHead[0]?.nameField,
        headName: tableHead[0]?.title,
        alignHeader: "center",
        width: "100%",
        // width: "35%",
      },
    ];

    return columns;
  }, [tableHead]);
}

const treeData = [
  {
    Id: 1678,
    NameAsWorkUnit: "PT altius-demo",
    NameAsJobTitle: "Direktur Utama",
    IsWorkUnit: true,
    ParentLevelId: null,
    StatusFormHeader: 1,
    IsWorkUnitToSelect: false,
    IsParentReadyHeader: false,
    IsChildReadyHeader: true,
  },
  {
    Id: 1679,
    NameAsWorkUnit: "SDM",
    NameAsJobTitle: "Manager SDM",
    IsWorkUnit: true,
    ParentLevelId: 1678,
    StatusFormHeader: 1,
    IsWorkUnitToSelect: true,
    IsParentReadyHeader: true,
    IsChildReadyHeader: false,
  },
  {
    Id: 1681,
    NameAsWorkUnit: "Dev IT",
    NameAsJobTitle: "Manager IT",
    IsWorkUnit: true,
    ParentLevelId: 1678,
    StatusFormHeader: 1,
    IsWorkUnitToSelect: true,
    IsParentReadyHeader: true,
    IsChildReadyHeader: false,
  },
  {
    Id: 1008084,
    NameAsWorkUnit: "Sales Head",
    NameAsJobTitle: "Sales Head",
    IsWorkUnit: true,
    ParentLevelId: 1679,
    StatusFormHeader: 1,
    IsWorkUnitToSelect: false,
    IsParentReadyHeader: true,
    IsChildReadyHeader: false,
  },
  {
    Id: 1011774,
    NameAsWorkUnit: "tessss",
    NameAsJobTitle: "eeesss",
    IsWorkUnit: true,
    ParentLevelId: 1008084,
    StatusFormHeader: 1,
    IsWorkUnitToSelect: false,
    IsParentReadyHeader: false,
    IsChildReadyHeader: false,
  },
];

"use client";
import { CustomTreeTable } from "@/components/comon/custom-table/custom-tree-table";
import { dataAdmin } from "@/utils/constans/data";
import { useTableColumns } from "./list-column";

export const TablePermissionAdmin = () => {
  const columns = useTableColumns();
  return (
    <CustomTreeTable
      columns={columns}
      rows={dataAdmin}
      showBorder={true}
      expandAllByDefault
      rowHeight={40}
      columnHeaderHeight={35}
      showButtons={{ expand: false, play: false, reset: false }}
    />
  );
};

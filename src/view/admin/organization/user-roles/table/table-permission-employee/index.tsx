import { CustomTreeTable } from "@/components/comon/custom-table/custom-tree-table";
import { dataEmployee } from "@/utils/constans/data";
import { useTableColumns } from "./list-columns";

export const TablePerimissionEmployee = () => {
  const columns = useTableColumns();
  return (
    <CustomTreeTable
      columns={columns}
      rows={dataEmployee}
      showBorder={true}
      expandAllByDefault
      rowHeight={40}
      columnHeaderHeight={35}
      showButtons={{ expand: false, play: false, reset: false }}
    />
  );
};

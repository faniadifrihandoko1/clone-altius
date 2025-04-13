"use client";
import GlobalTableNested from "@/components/comon/custom-table/custom-table-nested";
import { useState } from "react";
import ModalAddNestedJobRequest from "../modal/add";
import {
  dataNested,
  rows,
  useTableColumns,
  useTableNestedColumn,
} from "./list-columns";

const ListTableJobRequest = () => {
  const [add, setAdd] = useState<boolean>(false);
  const columns = useTableColumns();
  const nestedColumns = useTableNestedColumn();
  const toggleAddNested = () => setAdd(!add);

  console.log(add);
  return (
    <>
      <GlobalTableNested
        // ingat width arow 5% dan action 10%
        columns={columns}
        rows={rows}
        showBorder={true}
        pagination={true}
        page={1}
        pageSize={10}
        recordsFiltered={10}
        renderNestedTable={(nestedRows) => {
          const dataFilter = dataNested?.find(
            (row) => row.SubmissionNumber === nestedRows.SubmissionNumber
          );
          return (
            <GlobalTableNested
              columns={nestedColumns}
              rows={dataFilter?.children || []}
              showBorder={true}
              showAdd
              toggleAdd={toggleAddNested}
            />
          );
        }}
      />
      {add && <ModalAddNestedJobRequest open={add} toggle={toggleAddNested} />}
    </>
  );
};

export default ListTableJobRequest;

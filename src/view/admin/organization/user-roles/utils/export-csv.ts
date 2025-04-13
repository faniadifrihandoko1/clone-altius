import { GridColDef } from "@mui/x-data-grid";
import { saveAs } from "file-saver";
import Papa from "papaparse";

export const exportToCSV = (
  cols: GridColDef[],
  rows: Record<string, any>[],
  nameFile: string
) => {
  const filteredCols = cols.filter((col) => col.field !== "action");

  const headers = filteredCols.map((col) => col.headerName);
  const fields = filteredCols.map((col) => col.field);

  const data = rows.map((row) =>
    fields.reduce((acc: Record<string, any>, field, index) => {
      acc[headers[index] as string] = row[field];
      return acc;
    }, {})
  );

  const csv = Papa.unparse(data, {
    quotes: false,
    skipEmptyLines: true,
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, `${nameFile}.csv`);
};

import { GridColDef } from "@mui/x-data-grid";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const exportToExcels = async (
  cols: GridColDef[],
  rows: Record<string, any>[],
  nameFile: string
) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Data Export");

  const filteredCols = cols.filter((col) => col.field !== "action");

  // Konfigurasi kolom
  worksheet.columns = filteredCols.map((col) => ({
    header: col.headerName as string,
    key: col.field,
    width: col.flex ? col.flex * 100 : 20, // Menyesuaikan lebar berdasarkan flex
  }));

  // Styling Header
  worksheet.getRow(1).eachCell((cell, colNumber) => {
    cell.font = { bold: true };
    cell.alignment = {
      horizontal: cols[colNumber - 1]?.headerAlign || "left",
      vertical: "middle",
    };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFFE599" },
    };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });

  // Isi Data
  rows.forEach((row) => {
    const newRow = worksheet.addRow(row);
    newRow.eachCell((cell, colNumber) => {
      cell.alignment = {
        horizontal: cols[colNumber - 1]?.align || "left",
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
  });

  // Simpan file
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${nameFile}.xlsx`);
};

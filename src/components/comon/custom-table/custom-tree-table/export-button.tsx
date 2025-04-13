"use client";

import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Column } from "./row-tree-node";

interface ExportButtonProps {
  columns: Column[];
  rows: any[];
  fileName?: string;
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  columns,
  rows,
  fileName = "data",
}) => {
  const flattenTreeData = (nodes: any[], level = 0, result: any[] = []) => {
    nodes.forEach((node) => {
      const newNode = { ...node, level };
      result.push(newNode);
      const children = rows.filter((row) => row.ParentLevelId === node.Id);
      if (children.length > 0) {
        flattenTreeData(children, level + 1, result);
      }
    });
    return result;
  };

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // Merge headers
    worksheet.mergeCells("A1:D1");
    worksheet.getCell("A1").value = "Hierarchical Data";
    worksheet.getCell("A1").alignment = { horizontal: "center" };

    // Add header row
    const headerRow = worksheet.addRow(columns.map((col) => col.headName));
    headerRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { horizontal: "center" };
    });

    // Flatten data
    const flatData = flattenTreeData(
      rows.filter((row) => row.ParentLevelId === null)
    );

    // Process each row for hierarchical formatting
    flatData.forEach((row) => {
      const rowData = [];
      for (let i = 0; i < row.level; i++) {
        rowData.push(""); // Empty spaces for hierarchy
      }
      rowData.push(row[columns[0].field]); // Merge across hierarchy columns
      for (let i = row.level + 1; i < 3; i++) {
        rowData.push(""); // Fill remaining hierarchy space
      }
      columns.slice(1).forEach((col) => {
        rowData.push(row[col.field]);
      });
      worksheet.addRow(rowData);
    });

    // Auto width columns
    worksheet.columns.forEach((column) => {
      column.width = 20;
    });

    // Save file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer]),
      `${fileName}_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  return (
    <Button
      startIcon={<Download />}
      variant="contained"
      color="success"
      onClick={handleExport}
      sx={{ mb: 2 }}
    >
      Export Excel
    </Button>
  );
};

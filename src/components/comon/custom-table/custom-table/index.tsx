"use client";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";

export interface Column {
  field: string;
  headerName: string;
  alignHeader?: "left" | "right" | "center";
  alignRow?: "left" | "right" | "center";
  width?: string;
  renderCell?: (row: any) => ReactNode; // Tambahkan renderCell
  sortable?: boolean; // Tambahkan prop sortable
  searchable?: boolean; // Tambahkan prop searchable
}

interface GlobalTableProps {
  rows: any[];
  columns: Column[];
  showBorder?: boolean;
  showAction?: boolean;
  renderAction?: (row: any) => ReactNode;
  actionWidth?: string;
}

export default function GlobalTable({
  rows,
  columns,
  showBorder = false,
  showAction = false,
  renderAction,
  actionWidth = "10%",
}: GlobalTableProps) {
  return (
    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            border: showBorder ? "1px solid #e0e0e0" : "none",
          }}
          aria-label="global table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.alignHeader ?? "left"}
                  sx={{
                    width: column.width ?? "auto",
                    fontWeight: "bold",
                    border: showBorder ? "1px solid #e0e0e0" : "none",
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
              {showAction && (
                <TableCell
                  align="center"
                  sx={{
                    width: actionWidth,
                    fontWeight: "bold",
                    border: showBorder ? "1px solid #e0e0e0" : "none",
                  }}
                >
                  Action
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.alignRow ?? "left"}
                    sx={{
                      width: column.width ?? "auto",
                      border: showBorder ? "1px solid #e0e0e0" : "none",
                    }}
                  >
                    {row[index]}
                  </TableCell>
                ))}
                {showAction && renderAction && (
                  <TableCell
                    align="center"
                    sx={{
                      width: actionWidth,
                      border: showBorder ? "1px solid #e0e0e0" : "none",
                    }}
                  >
                    {renderAction(row)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

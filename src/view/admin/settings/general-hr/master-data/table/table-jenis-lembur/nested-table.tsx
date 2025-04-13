"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface NestedTableProps {
  data: { jamkerja: string; nilai: string }[];
}

export const NestedTable = ({ data }: NestedTableProps) => {
  return (
    <Table size="small" aria-label="nested table">
      <TableHead>
        <TableRow>
          <TableCell align="center" sx={{ fontWeight: "bold" }}>
            Jam Kerja
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: "bold" }}>
            Nilai
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((lembur, index) => (
          <TableRow key={index}>
            <TableCell align="center">{lembur.jamkerja}</TableCell>
            <TableCell align="center">{lembur.nilai}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NestedTable;

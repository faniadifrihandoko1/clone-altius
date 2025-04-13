"use client";
import { Pagination } from "@mui/material";
import React from "react";

interface PaginationMuiProps {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
}
const PaginationMui: React.FC<PaginationMuiProps> = ({
  total,
  page,
  pageSize,
  onPageChange,
}) => {
  return (
    <>
      {total ? (
        <Pagination
          count={Math.ceil(total / pageSize)}
          page={page}
          onChange={onPageChange}
          shape="rounded"
          color="primary"
          size="small"
          sx={{
            "& .MuiPaginationItem-page": {
              color: "gray", // Warna putih untuk angka
              "&.Mui-selected": {
                color: "white", // Warna putih saat aktif
                backgroundColor: "primary.main", // Tetap warna primary saat aktif
              },
            },
          }}
        />
      ) : null}
    </>
  );
};

export default PaginationMui;

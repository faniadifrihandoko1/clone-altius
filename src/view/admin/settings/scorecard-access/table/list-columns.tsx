"use client"

import { GridColDef } from "@mui/x-data-grid";
import { ListOptions } from "./list-options";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Nama",
    flex: 0.25, // 25% dari total lebar tabel
    editable: true,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "description",
    headerName: "Deskripsi",
    flex: 0.5, // 50% dari total lebar tabel
    editable: true,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "action",
    headerName: "",
    flex: 0.25, // 25% dari total lebar tabel
    sortable: false,
    filterable: false,
    editable: false,
    hideable: false,
    align: "center",
    headerAlign: "center",
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,

    renderCell: ({ row }) => <ListOptions data={row} />,
  },
];

export const rows = [
  { id: 1, name: "Produk A", description: "Deskripsi produk A" },
  { id: 2, name: "Produk B", description: "Deskripsi produk B" },
  { id: 3, name: "Produk C", description: "Deskripsi produk C" },
  { id: 4, name: "Produk D", description: "Deskripsi produk D" },
  { id: 5, name: "Produk E", description: "Deskripsi produk E" },
  { id: 6, name: "Produk F", description: "Deskripsi produk F" },
  { id: 7, name: "Produk G", description: "Deskripsi produk G" },
  { id: 8, name: "Produk H", description: "Deskripsi produk H" },
  { id: 9, name: "Produk I", description: "Deskripsi produk I" },
];

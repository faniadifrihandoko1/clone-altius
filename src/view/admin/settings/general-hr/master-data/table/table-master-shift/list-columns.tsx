"use client";
import { Column } from "@/components/comon/custom-table/custom-table";
import { ListOptions } from "./list-options";

export const columns: Column[] = [
  {
    field: "name",
    headerName: "Nama",
    alignHeader: "center",
    alignRow: "left",
    width: "80%",
    sortable: true,
    searchable: true,
  },
  {
    field: "action",
    headerName: "Action",
    alignHeader: "center",
    alignRow: "left",
    width: "10%",
    renderCell: ({ row }) => <ListOptions data={row} />,
  },
];

export const columnsNested: Column[] = [
  {
    field: "hari",
    headerName: "Hari",
    width: "50%",
    alignHeader: "center",
    sortable: true,
    searchable: true,
  },
  {
    field: "jam_masuk",
    headerName: "Jam Masuk",
    width: "20%",
    alignHeader: "center",
    alignRow: "center",
  },
  {
    field: "jam_keluar",
    headerName: "Jam Masuk",
    width: "20%",
    alignHeader: "center",
    alignRow: "center",
  },
];

export const rows = [
  {
    id: 1,
    name: "Normal",
    days: [
      { hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Selasa", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Rabu", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Kamis", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Jumat", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Sabtu", jam_masuk: "00:00", jam_keluar: "00:00" },
      { hari: "Minggu", jam_masuk: "00:00", jam_keluar: "00:00" },
    ],
  },
  {
    id: 2,
    name: "Shift Malam",
    days: [
      { hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Selasa", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Rabu", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Kamis", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Jumat", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Sabtu", jam_masuk: "00:00", jam_keluar: "00:00" },
      { hari: "Minggu", jam_masuk: "00:00", jam_keluar: "00:00" },
    ],
  },
  {
    id: 3,
    name: "Security",
    days: [
      { hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Selasa", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Rabu", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Kamis", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Jumat", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Sabtu", jam_masuk: "00:00", jam_keluar: "00:00" },
      { hari: "Minggu", jam_masuk: "00:00", jam_keluar: "00:00" },
    ],
  },
];

export const rowsNested = [
  {
    id: 1,
    days: [
      { hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Selasa", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Rabu", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Kamis", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Jumat", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Sabtu", jam_masuk: "00:00", jam_keluar: "00:00" },
      { hari: "Minggu", jam_masuk: "00:00", jam_keluar: "00:00" },
    ],
  },
  {
    id: 2,
    days: [
      { hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Selasa", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Rabu", jam_masuk: "08:30", jam_keluar: "17:00" },
      { hari: "Kamis", jam_masuk: "08:30", jam_keluar: "17:00" },
    ],
  },
  {
    id: 3,
    days: [{ hari: "Senin", jam_masuk: "08:30", jam_keluar: "17:00" }],
  },
];

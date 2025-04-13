// "use client";

// import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Collapse,
//   IconButton,
//   SelectChangeEvent,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableSortLabel,
// } from "@mui/material";
// import React, { ReactNode, useState } from "react";
// import PaginationSectionTableCustom from "../custom-pagination";

// // Type dan Interface
// type Order = "asc" | "desc";

// interface Column {
//   id: string;
//   label: string;
//   alignHeader?: "left" | "right" | "center";
//   alignRow?: "left" | "right" | "center";
//   width?: string;
//   disableSort?: boolean; // Prop untuk menonaktifkan sorting
// }

// interface GlobalTableProps {
//   rows: any[];
//   columns: Column[];
//   showBorder?: boolean;
//   showAction?: boolean;
//   renderAction?: (row: any) => ReactNode;
//   actionWidth?: string;
//   nestedProperty?: string;
//   renderNestedTable?: (nestedRows: any[]) => ReactNode;
//   pagination?: boolean;
//   page?: number;
//   pageSize?: number;
//   recordsFiltered?: number;
//   handleLimitChange?: (e: SelectChangeEvent) => void;
//   handlePageChange?: (event: any, newPage: number) => void;
//   showAdd?: boolean;
//   toggleAdd?: () => void;
// }

// // Fungsi Comparator untuk Sorting
// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) return -1;
//   if (b[orderBy] > a[orderBy]) return 1;

//   return 0;
// }

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key
// ): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Komponen Utama
// export default function GlobalTableNested({
//   rows,
//   columns,
//   showBorder = false,
//   showAction = false,
//   renderAction,
//   actionWidth = "10%",
//   nestedProperty,
//   renderNestedTable,
//   pagination = false,
//   page,
//   pageSize,
//   recordsFiltered,
//   handleLimitChange,
//   handlePageChange,
//   showAdd = false,
//   toggleAdd,
// }: GlobalTableProps) {
//   const [order, setOrder] = useState<Order>("asc");
//   const [orderBy, setOrderBy] = useState<string>("");
//   const [openRowId, setOpenRowId] = useState<number | string | null>(null);

//   // Fungsi untuk handle sorting
//   const handleRequestSort = (property: string) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   // Fungsi untuk handle expand/collapse row
//   const handleExpandClick = (rowId: number | string) => {
//     setOpenRowId(openRowId === rowId ? null : rowId);
//   };

//   // Sorting rows
//   const sortedRows = React.useMemo(() => {
//     if (!orderBy) return rows;

//     return [...rows].sort(getComparator(order, orderBy));
//   }, [order, orderBy, rows]);

//   return (
//     <Box
//       sx={{
//         mt: 0,
//         display: "flex",
//         flexDirection: "column",
//         gap: 1,
//         width: "100%",
//         border: showAdd ? "1px solid #e0e0e0" : "none",
//         borderRadius: 1,
//       }}
//     >
//       {showAdd && (
//         <Box sx={{ marginX: 0.5, marginTop: 1 }}>
//           <Button
//             variant="contained"
//             size={"medium"}
//             className="!font-semibold  text-white text-xs"
//             onClick={toggleAdd}
//           >
//             Tambah
//           </Button>
//         </Box>
//       )}

//       <Table
//         sx={{
//           minWidth: 650,
//           border: showBorder ? "1px solid #e0e0e0" : "none",
//           borderRadius: 1,
//         }}
//         size="small"
//         aria-label="global table"
//       >
//         <TableHead>
//           <TableRow>
//             {nestedProperty && <TableCell sx={{ width: "5%" }}></TableCell>}
//             {columns?.map((column) => (
//               <TableCell
//                 key={column.id}
//                 align={column.alignHeader ?? "left"}
//                 sx={{
//                   width: column.width ?? "auto",
//                   fontWeight: "bold",
//                   border: showBorder ? "1px solid #e0e0e0" : "none",
//                 }}
//               >
//                 {column.disableSort ? (
//                   column.label
//                 ) : (
//                   <TableSortLabel
//                     active={orderBy === column.id}
//                     direction={orderBy === column.id ? order : "asc"}
//                     onClick={() => handleRequestSort(column.id)}
//                   >
//                     {column.label}
//                     {orderBy === column.id ? (
//                       <Box component="span" sx={{ display: "none" }}>
//                         {order === "desc"
//                           ? "sorted descending"
//                           : "sorted ascending"}
//                       </Box>
//                     ) : null}
//                   </TableSortLabel>
//                 )}
//               </TableCell>
//             ))}
//             {showAction && (
//               <TableCell
//                 align="center"
//                 sx={{
//                   width: actionWidth,
//                   fontWeight: "bold",
//                   border: showBorder ? "1px solid #e0e0e0" : "none",
//                 }}
//               >
//                 Action
//               </TableCell>
//             )}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {sortedRows.map((row, index) => (
//             <Box key={index}>
//               <TableRow key={row.id || index}>
//                 {nestedProperty && (
//                   <TableCell>
//                     {row[nestedProperty]?.length > 0 && (
//                       <IconButton
//                         size="small"
//                         onClick={() => handleExpandClick(row.id)}
//                       >
//                         {openRowId === row.id ? (
//                           <KeyboardArrowUp />
//                         ) : (
//                           <KeyboardArrowDown />
//                         )}
//                       </IconButton>
//                     )}
//                   </TableCell>
//                 )}
//                 {columns?.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.alignRow ?? "left"}
//                     sx={{
//                       width: column.width ?? "auto",
//                       border: showBorder ? "1px solid #e0e0e0" : "none",
//                     }}
//                   >
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//                 {showAction && renderAction && (
//                   <TableCell
//                     align="center"
//                     sx={{
//                       width: actionWidth,
//                       border: showBorder ? "1px solid #e0e0e0" : "none",
//                     }}
//                   >
//                     {renderAction(row)}
//                   </TableCell>
//                 )}
//               </TableRow>
//               {openRowId === row.id && nestedProperty && (
//                 <TableRow>
//                   <TableCell
//                     colSpan={columns.length + (showAction ? 2 : 1)}
//                     sx={{ pl: 5, pr: 0 }}
//                   >
//                     <Collapse
//                       in={openRowId === row.id}
//                       timeout="auto"
//                       unmountOnExit
//                     >
//                       <Box sx={{ width: "95%", ml: 5 }}>
//                         {renderNestedTable &&
//                           renderNestedTable(row[nestedProperty])}
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               )}
//             </Box>
//           ))}
//         </TableBody>
//       </Table>

//       {pagination && (
//         <PaginationSectionTableCustom
//           page={page ?? 1}
//           pageSize={pageSize ?? 10}
//           recordsFiltered={recordsFiltered ?? 0}
//           handleLimitChange={handleLimitChange ?? (() => {})}
//           handlePageChange={handlePageChange ?? (() => {})}
//         />
//       )}
//     </Box>
//   );
// }

import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Popover,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment, useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import PaginationSectionTableCustom from "../custom-pagination";

// interface Column {
//   field: string;
//   headerName: string;
//   alignHeader?: "left" | "right" | "center";
//   alignRow?: "left" | "right" | "center";
//   width?: string;
// }

// interface GlobalTableProps {
//   rows: any[];
//   columns: Column[];
//   showBorder?: boolean;
//   showAction?: boolean;
//   renderAction?: (row: any) => ReactNode;
//   actionWidth?: string;
//   nestedProperty?: string;
//   renderNestedTable?: (nestedRows: any[]) => ReactNode;
//   pagination?: boolean;
//   page?: number;
//   pageSize?: number;
//   recordsFiltered?: number;
//   handleLimitChange?: (e: SelectChangeEvent) => void;
//   handlePageChange?: (event: any, newPage: number) => void;
//   showAdd?: boolean;
//   toggleAdd?: () => void;
// }

// export default function GlobalTableNested({
//   rows,
//   columns,
//   showBorder = false,
//   showAction = false,
//   renderAction,
//   actionWidth = "10%",
//   nestedProperty,
//   renderNestedTable,
//   pagination = false,
//   page,
//   pageSize,
//   recordsFiltered,
//   handleLimitChange,
//   handlePageChange,
//   showAdd = false,
//   toggleAdd,
// }: GlobalTableProps) {
//   const [openRow, setOpenRow] = useState<number | null>(null);
//   const handleExpandClick = (index: number) => {
//     setOpenRow(openRow === index ? null : index);
//   };

//   return (
//     <Box
//       sx={{
//         mt: 0,
//         display: "flex",
//         flexDirection: "column",
//         gap: 1,
//         width: "100%",
//         border: showAdd ? "1px solid #e0e0e0" : "none",
//         borderRadius: 1,
//       }}
//     >
//       {showAdd && (
//         <Box sx={{ marginX: 0.5, marginTop: 1 }}>
//           <Button
//             variant="contained"
//             size={"medium"}
//             className="!font-semibold  text-white text-xs"
//             onClick={toggleAdd}
//           >
//             Tambah
//           </Button>
//         </Box>
//       )}
//       {/* <TableContainer component={Paper}> */}
//       <Table
//         sx={{
//           minWidth: 650,
//           border: showBorder ? "1px solid #e0e0e0" : "none",
//           borderRadius: 1,
//         }}
//         size="small"
//         aria-label="global table"
//       >
//         <TableHead>
//           <TableRow>
//             {nestedProperty && <TableCell sx={{ width: "5%" }}></TableCell>}
//             {columns?.map((column, index) => (
//               <TableCell
//                 key={index}
//                 align={column.alignHeader ?? "left"}
//                 sx={{
//                   width: column.width ?? "auto",
//                   fontWeight: "bold",
//                   border: showBorder ? "1px solid #e0e0e0" : "none",
//                 }}
//               >
//                 {column.headerName}
//               </TableCell>
//             ))}
//             {showAction && (
//               <TableCell
//                 align="center"
//                 sx={{
//                   width: actionWidth,
//                   fontWeight: "bold",
//                   border: showBorder ? "1px solid #e0e0e0" : "none",
//                 }}
//               >
//                 Action
//               </TableCell>
//             )}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row, index) => (
//             <Fragment key={index}>
//               <TableRow key={index}>
//                 {nestedProperty && (
//                   <TableCell>
//                     {row[nestedProperty]?.length > 0 && (
//                       <IconButton
//                         size="small"
//                         onClick={() => handleExpandClick(index)}
//                       >
//                         {openRow === index ? (
//                           <KeyboardArrowUp />
//                         ) : (
//                           <KeyboardArrowDown />
//                         )}
//                       </IconButton>
//                     )}
//                   </TableCell>
//                 )}
//                 {columns?.map((column, index) => (
//                   <TableCell
//                     key={index}
//                     align={column.alignRow ?? "left"}
//                     sx={{
//                       width: column.width ?? "auto",
//                       border: showBorder ? "1px solid #e0e0e0" : "none",
//                     }}
//                   >
//                     {row[index]}
//                   </TableCell>
//                 ))}
//                 {showAction && renderAction && (
//                   <TableCell
//                     align="center"
//                     sx={{
//                       width: actionWidth,
//                       border: showBorder ? "1px solid #e0e0e0" : "none",
//                     }}
//                   >
//                     {renderAction(row)}
//                   </TableCell>
//                 )}
//               </TableRow>
//               {openRow === index && nestedProperty && (
//                 <TableRow>
//                   <TableCell
//                     colSpan={columns.length + (showAction ? 2 : 1)}
//                     sx={{ pl: 5, pr: 0 }}
//                   >
//                     <Collapse
//                       in={openRow === index}
//                       timeout="auto"
//                       unmountOnExit
//                     >
//                       <Box sx={{ width: "95%", ml: 5 }}>
//                         {renderNestedTable &&
//                           renderNestedTable(row[nestedProperty])}
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               )}
//             </Fragment>
//           ))}
//         </TableBody>
//       </Table>
//       {pagination && (
//         <PaginationSectionTableCustom
//           page={page ?? 1}
//           pageSize={pageSize ?? 10}
//           recordsFiltered={recordsFiltered ?? 0}
//           handleLimitChange={handleLimitChange ?? (() => {})}
//           handlePageChange={handlePageChange ?? (() => {})}
//         />
//       )}
//       {/* </TableContainer> */}
//     </Box>
//   );
// }

// interface Column {
//   field: string;
//   headerName: string;
//   alignHeader?: "left" | "right" | "center";
//   alignRow?: "left" | "right" | "center";
//   width?: string;
//   renderCell?: (row: any) => ReactNode; // Tambahkan renderCell
// }

// interface GlobalTableProps {
//   rows: any[];
//   columns: Column[];
//   showBorder?: boolean;
//   nestedProperty?: string;
//   renderNestedTable?: (nestedRows: any[]) => ReactNode;
//   pagination?: boolean;
//   page?: number;
//   pageSize?: number;
//   recordsFiltered?: number;
//   handleLimitChange?: (e: SelectChangeEvent) => void;
//   handlePageChange?: (event: any, newPage: number) => void;
//   showAdd?: boolean;
//   toggleAdd?: () => void;
// }

// export default function GlobalTableNested({
//   rows,
//   columns,
//   showBorder = false,
//   nestedProperty,
//   renderNestedTable,
//   pagination = false,
//   page,
//   pageSize,
//   recordsFiltered,
//   handleLimitChange,
//   handlePageChange,
//   showAdd = false,
//   toggleAdd,
// }: GlobalTableProps) {
//   const [openRow, setOpenRow] = useState<number | null>(null);
//   const handleExpandClick = (index: number) => {
//     setOpenRow(openRow === index ? null : index);
//   };

//   return (
//     <Box
//       sx={{
//         mt: 0,
//         display: "flex",
//         flexDirection: "column",
//         gap: 1,
//         width: "100%",
//         border: showAdd ? "1px solid #e0e0e0" : "none",
//         borderRadius: 1,
//       }}
//     >
//       {showAdd && (
//         <Box sx={{ marginX: 0.5, marginTop: 1 }}>
//           <Button
//             variant="contained"
//             size={"medium"}
//             className="!font-semibold  text-white text-xs"
//             onClick={toggleAdd}
//           >
//             Tambah
//           </Button>
//         </Box>
//       )}
//       <Table
//         sx={{
//           minWidth: 650,
//           border: showBorder ? "1px solid #e0e0e0" : "none",
//           borderRadius: 1,
//         }}
//         size="small"
//         aria-label="global table"
//       >
//         <TableHead>
//           <TableRow>
//             {nestedProperty && <TableCell sx={{ width: "5%" }}></TableCell>}
//             {columns?.map((column, index) => (
//               <TableCell
//                 key={index}
//                 align={column.alignHeader ?? "left"}
//                 sx={{
//                   width: column.width ?? "auto",
//                   fontWeight: "bold",
//                   border: showBorder ? "1px solid #e0e0e0" : "none",
//                 }}
//               >
//                 {column.headerName}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row, index) => (
//             <Fragment key={index}>
//               <TableRow key={index}>
//                 {nestedProperty && (
//                   <TableCell>
//                     {row[nestedProperty]?.length > 0 && (
//                       <IconButton
//                         size="small"
//                         onClick={() => handleExpandClick(index)}
//                       >
//                         {openRow === index ? (
//                           <KeyboardArrowUp />
//                         ) : (
//                           <KeyboardArrowDown />
//                         )}
//                       </IconButton>
//                     )}
//                   </TableCell>
//                 )}
//                 {columns?.map((column, index) => (
//                   <TableCell
//                     key={index}
//                     align={column.alignRow ?? "left"}
//                     sx={{
//                       width: column.width ?? "auto",
//                       border: showBorder ? "1px solid #e0e0e0" : "none",
//                     }}
//                   >
//                     {column.renderCell
//                       ? column.renderCell(row)
//                       : row[column.field]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//               {openRow === index && nestedProperty && (
//                 <TableRow>
//                   <TableCell colSpan={columns.length + 1} sx={{ pl: 5, pr: 0 }}>
//                     <Collapse
//                       in={openRow === index}
//                       timeout="auto"
//                       unmountOnExit
//                     >
//                       <Box sx={{ width: "95%", ml: 5 }}>
//                         {renderNestedTable &&
//                           renderNestedTable(row[nestedProperty])}
//                       </Box>
//                     </Collapse>
//                   </TableCell>
//                 </TableRow>
//               )}
//             </Fragment>
//           ))}
//         </TableBody>
//       </Table>
//       {pagination && (
//         <PaginationSectionTableCustom
//           page={page ?? 1}
//           pageSize={pageSize ?? 10}
//           recordsFiltered={recordsFiltered ?? 0}
//           handleLimitChange={handleLimitChange ?? (() => {})}
//           handlePageChange={handlePageChange ?? (() => {})}
//         />
//       )}
//     </Box>
//   );
// }

import { Chip, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { MdAdd } from "react-icons/md";

type Order = "asc" | "desc";

interface Column {
  field: string;
  headerName: string;
  alignHeader?: "left" | "right" | "center";
  alignRow?: "left" | "right" | "center";
  width?: string;
  renderCell?: (row: any) => React.ReactNode;
  sortable?: boolean; // Tambahkan prop sortable
  searchable?: boolean; // Tambahkan prop searchable
}

interface ColumnSearch {
  field: string;
  value: string;
}

interface GlobalTableProps {
  rows: any[];
  columns: Column[];
  showBorder?: boolean;
  nestedProperty?: string;
  renderNestedTable?: (nestedRows: any) => React.ReactNode;
  pagination?: boolean;
  page?: number;
  pageSize?: number;
  recordsFiltered?: number;
  handleLimitChange?: (e: SelectChangeEvent) => void;
  handlePageChange?: (event: any, newPage: number) => void;
  showAdd?: boolean;
  toggleAdd?: () => void;
}

// Fungsi untuk membandingkan dua nilai
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Fungsi pembanding untuk urutan descending
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export default function GlobalTableNested({
  rows,
  columns,
  showBorder = false,
  renderNestedTable,
  pagination = false,
  page,
  pageSize,
  recordsFiltered,
  handleLimitChange,
  handlePageChange,
  showAdd = false,
  toggleAdd,
}: GlobalTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [openRowIds, setOpenRowIds] = useState<(number | string)[]>([]);
  const [columnSearches, setColumnSearches] = useState<ColumnSearch[]>([]);
  const [activeSortIcon, setActiveSortIcon] = useState<string | null>(null);
  const [activeSearchIcon, setActiveSearchIcon] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<{
    field: string;
    element: HTMLElement;
  } | null>(null);

  const t = useTranslations("comon.textField");
  const ts = useTranslations("comon.modal.add");

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    const isDesc = orderBy === property && order === "desc";

    if (!isAsc && !isDesc) {
      // Klik pertama: sort by asc
      setOrder("asc");
      setOrderBy(property);
      setActiveSortIcon(property); // Aktifkan ikon
    } else if (isAsc) {
      // Klik kedua: sort by desc
      setOrder("desc");
      setOrderBy(property);
      setActiveSortIcon(property); // Tetap aktifkan ikon
    } else if (isDesc) {
      // Klik ketiga: reset sort
      setOrder("asc");
      setOrderBy("");
      setActiveSortIcon(null); // Nonaktifkan ikon
    }
  };

  // Fungsi untuk handle expand/collapse row
  const handleExpandClick = (rowId: number | string) => {
    setOpenRowIds((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  // Sorting rows
  const sortedRows = React.useMemo(() => {
    if (!Array.isArray(rows)) return [];
    if (!orderBy) return rows;

    return [...rows].sort(getComparator(order, orderBy));
  }, [order, orderBy, rows]);

  // Handle search popover

  const handleOpenSearch = (
    field: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation(); // Hentikan propagasi event
    setAnchorEl({ field, element: event.currentTarget });
    setActiveSearchIcon(field); // Aktifkan ikon pencarian
  };

  const handleCloseSearch = (event: React.MouseEvent) => {
    event.stopPropagation(); // Hentikan propagasi event
    setAnchorEl(null);
    setActiveSearchIcon(null); // Nonaktifkan ikon pencarian
  };
  // Handle search input change
  const handleSearchChange = (field: string, value: string) => {
    const newSearches = columnSearches.filter(
      (search) => search.field !== field
    );
    if (value.trim()) {
      newSearches.push({ field, value: value.toLowerCase() });
    }
    setColumnSearches(newSearches);
  };

  // Filter rows based on column searches
  const filteredRows = React.useMemo(() => {
    return sortedRows.filter((row) => {
      return columnSearches.every((search) => {
        const cellValue = row[search.field]
          ? String(row[search.field]).toLowerCase()
          : "";
        return cellValue.includes(search.value);
      });
    });
  }, [sortedRows, columnSearches]);

  return (
    <Box
      sx={{
        mt: 0,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        // border: showAdd ? "1px solid #e0e0e0" : "none",
        borderRadius: 1,
      }}
    >
      {columnSearches.length > 0 && (
        <Box sx={{ p: 1 }}>
          <Stack direction="row" spacing={1}>
            {columnSearches.map((search, index) => (
              <Chip
                key={index}
                label={`${columns.find((c) => c.field === search.field)?.headerName}: ${search.value}`}
                onDelete={() => handleSearchChange(search.field, "")}
              />
            ))}
          </Stack>
        </Box>
      )}
      {showAdd && (
        <Box sx={{ marginX: 0.5, marginY: 1 }}>
          <Button
            variant="contained"
            size={"small"}
            className="!font-semibold  !text-white !text-xs"
            onClick={toggleAdd}
            startIcon={<MdAdd size={20} />}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: -1,
              minWidth: "auto",
            }}
          >
            {ts("button.title")}
          </Button>
        </Box>
      )}
      <Table
        sx={{
          minWidth: 650,
          border: showBorder ? "1px solid #e0e0e0" : "none",
          borderRadius: 1,
          marginBottom: 1,
        }}
        size="small"
        aria-label="global table"
      >
        <TableHead>
          <TableRow>
            {renderNestedTable && <TableCell sx={{ width: "5%" }}></TableCell>}
            {columns?.map((column, index) => (
              <TableCell
                key={index}
                align={column.alignHeader ?? "left"}
                onClick={() =>
                  column.sortable && handleRequestSort(column.field)
                }
                sx={{
                  width: column.width ?? "auto",
                  fontWeight: "bold",
                  border: showBorder ? "1px solid #e0e0e0" : "none",
                  cursor: column.sortable ? "pointer" : "default",
                  position: "relative",
                  "&:hover .sort-icon": {
                    // Tampilkan ikon sort saat hover
                    visibility: "visible",
                  },
                  "&:hover .search-trigger": {
                    // Tampilkan ikon pencarian saat hover
                    visibility: "visible",
                  },
                }}
              >
                {column.headerName}
                {column.sortable && (
                  <IconButton
                    size="small"
                    className="sort-icon"
                    sx={{
                      visibility:
                        orderBy === column.field ? "visible" : "hidden",
                      marginLeft: 1,
                      padding: 0.5,
                      color:
                        activeSortIcon === column.field ? "#6f7071" : "#9e9e9e", // Warna ikon
                      "&:hover": {
                        visibility: "visible", // Tampilkan ikon saat hover
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Hentikan propagasi klik
                      handleRequestSort(column.field);
                    }}
                  >
                    {orderBy === column.field ? (
                      order === "asc" ? (
                        <IoMdArrowUp />
                      ) : (
                        <IoMdArrowDown />
                      )
                    ) : (
                      <IoMdArrowUp />
                    )}
                  </IconButton>
                )}

                {/* Ikon MoreVert di pojok kanan */}

                {column.searchable && (
                  <IconButton
                    size="small"
                    className="search-trigger"
                    sx={{
                      visibility:
                        activeSearchIcon === column.field
                          ? "visible"
                          : "hidden",
                      padding: 0.5,
                      position: "absolute",
                      right: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color:
                        activeSearchIcon === column.field
                          ? "#6f7071"
                          : "#9e9e9e",
                      "&:hover": {
                        visibility: "visible", // Tampilkan ikon saat hover
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Hentikan propagasi klik
                      handleOpenSearch(column.field, e);
                    }}
                  >
                    <MoreVert />
                  </IconButton>
                )}
                {/* )} */}

                {/* Popover Search */}
                <Popover
                  open={anchorEl?.field === column.field}
                  anchorEl={anchorEl?.element}
                  onClose={(e) => handleCloseSearch(e as React.MouseEvent)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box
                    sx={{ p: 1, minWidth: 200 }}
                    onMouseDown={(e) => e.stopPropagation()} // Mencegah event mouseDown dari bubbling
                    onClick={(e) => e.stopPropagation()} // Mencegah event click dari bubbling
                  >
                    <TextField
                      autoFocus
                      fullWidth
                      size="small"
                      label={t("label", { name: column.headerName })}
                      value={
                        columnSearches.find((s) => s.field === column.field)
                          ?.value || ""
                      }
                      onChange={(e) => {
                        e.stopPropagation(); // Mencegah event change dari bubbling
                        handleSearchChange(column.field, e.target.value);
                      }}
                    />
                  </Box>
                </Popover>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows?.length > 0 ? (
            filteredRows?.map((row, index) => (
              <Fragment key={index}>
                <TableRow key={index}>
                  {renderNestedTable && (
                    <TableCell>
                      {/* {row[nestedProperty]?.length > 0 && ( */}
                      <IconButton
                        size="small"
                        onClick={() => handleExpandClick(index)}
                      >
                        {openRowIds.includes(index) ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                      {/* )} */}
                    </TableCell>
                  )}
                  {columns?.map((column, index) => (
                    <TableCell
                      key={index}
                      align={column.alignRow ?? "left"}
                      sx={{
                        width: column.width ?? "auto",
                        border: showBorder ? "1px solid #e0e0e0" : "none",
                      }}
                    >
                      {column.renderCell
                        ? column.renderCell(row)
                        : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
                {openRowIds.includes(index) && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + 1}
                      sx={{ pl: 5, pr: 0 }}
                    >
                      <Collapse
                        in={openRowIds.includes(index)}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box sx={{ width: "95%", ml: 5 }}>
                          {renderNestedTable && renderNestedTable(row)}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))
          ) : (
            <TableRow sx={{ height: 100 }}>
              <TableCell
                colSpan={columns.length + (renderNestedTable ? 1 : 0)}
                align="center"
              >
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pagination && (
        <Box sx={{ mt: 1 }}>
          <PaginationSectionTableCustom
            page={page ?? 1}
            pageSize={pageSize ?? 10}
            recordsFiltered={recordsFiltered ?? 0}
            handleLimitChange={handleLimitChange ?? (() => {})}
            handlePageChange={handlePageChange ?? (() => {})}
          />
        </Box>
      )}
    </Box>
  );
}

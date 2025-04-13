"use client";

import { ChevronRight, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export interface Column {
  field: string;
  headName: string;
  alignHeader?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
  width?: string;
  renderCell?: (node: any) => React.ReactNode;
}

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  [key: string]: any;
}

interface TreeNodeRowProps {
  node: TreeNode;
  columns: Column[];
  level?: number;
  showBorder?: boolean;
  rowHeight?: number;
  allRows: TreeNode[];
  enableDrag?: boolean;
  moveNode: (draggedId: number, targetId: number) => void;
  expanded: { [key: string]: boolean };
  setExpanded: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

export const TreeNodeRow: React.FC<TreeNodeRowProps> = ({
  node,
  columns,
  level = 0,
  showBorder,
  rowHeight = 48,
  allRows,
  enableDrag = false,
  moveNode,
  expanded,
  setExpanded,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Cari anak berdasarkan ParentLevelId
  const children = allRows.filter((child) => child.ParentLevelId === node.Id);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "NODE",
    item: { id: node.Id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: enableDrag, // Hanya aktif jika enableDrag = true
  }));

  const [, drop] = useDrop(() => ({
    accept: "NODE",
    drop: (item: { id: number }) => {
      if (item.id !== node.Id) {
        moveNode(item.id, node.Id); // Panggil moveNode saat drop
      }
    },
  }));

  const mergedRef = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node;
      drag(node);
      drop(node);
    },
    [drag, drop]
  );

  return (
    <>
      <TableRow
        ref={mergedRef}
        sx={{
          border: showBorder ? "1px solid #e0e0e0" : "none",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {columns.map((col, index) => (
          <TableCell
            key={col.field}
            align={col.align || "left"}
            sx={{
              width: col.width || (index === 0 ? "50%" : "15%"),
              paddingLeft: index === 0 ? `${level * 32 + 35}px` : undefined,
              position: index === 0 ? "relative" : undefined,
              border: showBorder ? "1px solid #e0e0e0" : "none",
              verticalAlign: "middle",
              paddingY: 1,
            }}
          >
            {index === 0 ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Tampilkan tombol expand jika ada anak */}
                {children.length > 0 && (
                  <IconButton
                    onClick={() => handleExpand(node.Id)}
                    size="small"
                    sx={{
                      position: "absolute",
                      left: `${level * 30 + 10}px`,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {expanded[node.Id] ? <ExpandMore /> : <ChevronRight />}
                  </IconButton>
                )}
                {col.renderCell ? (
                  col.renderCell(node)
                ) : (
                  <span>{node[col.field] || "-"}</span>
                )}
              </div>
            ) : col.renderCell ? (
              col.renderCell(node)
            ) : (
              <span>{node[col.field] || "-"}</span>
            )}
          </TableCell>
        ))}
      </TableRow>
      {/* Render anak jika node diperluas */}
      {children.length > 0 && (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            sx={{
              padding: 0,
              backgroundColor: (theme) => theme.palette.grey[100],
            }}
          >
            <Collapse
              in={expanded[node.Id]}
              timeout="auto"
              unmountOnExit
              sx={{ padding: 0, margin: 0 }}
            >
              <Box>
                <Table
                  sx={{
                    border: showBorder ? "1px solid #e0e0e0" : "none",
                    borderRadius: 1,
                  }}
                  size="small"
                >
                  <TableBody>
                    {children.map((child) => (
                      <TreeNodeRow
                        key={child.Id}
                        node={child}
                        columns={columns}
                        level={level + 1}
                        showBorder={showBorder}
                        rowHeight={rowHeight}
                        allRows={allRows}
                        enableDrag={enableDrag}
                        moveNode={moveNode}
                        expanded={expanded}
                        setExpanded={setExpanded}
                      />
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

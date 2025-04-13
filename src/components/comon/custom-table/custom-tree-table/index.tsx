"use client";

import {
  ContentCopy,
  ExpandLess,
  ExpandMore,
  Refresh,
} from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TbFileExcel } from "react-icons/tb";
import { Column, TreeNodeRow } from "./row-tree-node";

type ButtonKeys = "expand" | "play" | "reset" | "copy" | "close";
type ShowButtons = {
  [K in ButtonKeys]?: boolean;
};

interface TreeTableViewProps {
  columns: Column[];
  rows: any[];
  showBorder?: boolean;
  rowHeight?: number;
  columnHeaderHeight?: number;
  enableDrag?: boolean;
  moveNode?: (draggedId: number, targetId: number) => void;
  showButtons?: ShowButtons;
  onCopyClick?: () => void;
  expandAllByDefault?: boolean;
}

export const CustomTreeTable: React.FC<TreeTableViewProps> = ({
  columns,
  rows,
  showBorder = false,
  rowHeight = 48,
  columnHeaderHeight = 56,
  enableDrag = false,
  moveNode,
  expandAllByDefault = false,

  showButtons = {
    expand: true,
    play: true,
    reset: true,
    copy: true,
    close: true,
  },
  onCopyClick,
}) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const expandAll = useCallback(() => {
    setExpanded((prev) => {
      const newExpandedState = { ...prev };

      rows.forEach((row) => {
        const hasChildren = rows.some(
          (child) => child.ParentLevelId === row.Id
        );
        if (hasChildren) {
          newExpandedState[row.Id] = true;
        }
      });

      return newExpandedState;
    });
  }, [rows]);

  // Fungsi untuk collapse semua
  const collapseAll = () => {
    setExpanded({});
  };

  useEffect(() => {
    if (expandAllByDefault && rows.length > 0) {
      const newExpandedState: { [key: string]: boolean } = {};

      rows.forEach((row) => {
        const hasChildren = rows.some(
          (child) => child.ParentLevelId === row.Id
        );
        if (hasChildren) {
          newExpandedState[row.Id] = true;
        }
      });

      setExpanded(newExpandedState);
    }
  }, [expandAllByDefault, rows]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          {showButtons.expand && (
            <Tooltip title="Expand">
              <IconButton
                size="small"
                sx={{
                  border: "1px solid gray",
                  px: 2,
                  color: "gray",
                  borderRadius: "6px",
                  width: 30,
                  height: 30,
                }}
                onClick={expandAll}
              >
                <ExpandMore />
              </IconButton>
            </Tooltip>
          )}
          {showButtons.play && (
            <Tooltip title="Collapse" onClick={collapseAll}>
              <IconButton
                size="small"
                sx={{
                  border: "1px solid gray",
                  px: 2,
                  color: "gray",
                  borderRadius: "6px",
                  width: 30,
                  height: 30,
                }}
              >
                <ExpandLess />
              </IconButton>
            </Tooltip>
          )}
          {showButtons.reset && (
            <Tooltip title="Refresh">
              <IconButton
                size="small"
                sx={{
                  border: "1px solid gray",
                  px: 2,
                  color: "gray",
                  borderRadius: "6px",
                  width: 30,
                  height: 30,
                }}
              >
                <Refresh style={{ fontSize: "18px" }} />
              </IconButton>
            </Tooltip>
          )}
          {showButtons.copy && (
            <Tooltip title="Copy">
              <IconButton
                size="small"
                sx={{
                  border: "1px solid gray",
                  px: 2,
                  color: "gray",
                  borderRadius: "6px",
                  width: 30,
                  height: 30,
                }}
                onClick={onCopyClick}
              >
                <ContentCopy style={{ fontSize: "16px" }} />
              </IconButton>
            </Tooltip>
          )}
          {showButtons.close && (
            <IconButton
              // endIcon={<RiArrowDropDownLine />}
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "6px",
                paddingX: 1.5,
                color: "gray",
                fontSize: "12px",
                width: 90,
                gap: 0.5,
                height: 30,
                border: "1px solid  gray",
                "&:hover": { backgroundColor: "#EEEEEE" },
              }}
              // onClick={handleClick}
              // onClick={onExportExcel}
            >
              <TbFileExcel size={18} />
              Export
            </IconButton>
          )}
        </div>
        <Table
          sx={{
            // minWidth: 650,
            border: showBorder ? "1px solid #e0e0e0" : "none",
            borderRadius: 1,
          }}
          size="small"
          aria-label="global table"
        >
          <TableHead>
            <TableRow
              sx={{
                height: columnHeaderHeight,
                minHeight: columnHeaderHeight,
                display: "table-row",
              }}
            >
              {columns.map((col) => (
                <TableCell
                  key={col.field}
                  align={col.alignHeader || "left"}
                  sx={{
                    width: col.width || "auto",
                    fontWeight: "bold",
                    border: showBorder ? "1px solid #e0e0e0" : "none",
                    paddingY: 0,
                  }}
                >
                  {col.headName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) => row.ParentLevelId === null)
              .map((node) => (
                <TreeNodeRow
                  key={node.Id}
                  node={node}
                  columns={columns}
                  showBorder={showBorder}
                  rowHeight={rowHeight}
                  allRows={rows}
                  enableDrag={enableDrag}
                  moveNode={moveNode ? moveNode : () => {}}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
          </TableBody>
        </Table>
      </div>
    </DndProvider>
  );
};

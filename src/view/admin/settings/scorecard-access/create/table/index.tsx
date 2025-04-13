"use client";

import { ChevronRight, ExpandMore } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

const data: TreeNode[] = [
  {
    id: "1",
    name: "PT altius-demo",
    children: [
      { id: "1-1", name: "SDM" },
      { id: "1-2", name: "Dev IT" },
      {
        id: "1-3",
        name: "Sales Head",
        children: [{ id: "1-3-1", name: "Sales 1" }],
      },
    ],
  },
  {
    id: "2",
    name: "PT altius-demo",
    children: [
      { id: "2-1", name: "SDM" },
      { id: "2-2", name: "Dev IT" },
      {
        id: "2-3",
        name: "Sales Head",
        children: [{ id: "2-3-1", name: "Sales 1" }],
      },
    ],
  },
  {
    id: "3",
    name: "PT Perindo",
  },
];

const TreeNodeRow: React.FC<{ node: TreeNode; level?: number }> = ({
  node,
  level = 0,
}) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [checked, setChecked] = useState<{ [key: string]: boolean[] }>({});

  const handleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheck = (id: string, index: number) => {
    setChecked((prev) => ({
      ...prev,
      [id]: prev[id]
        ? prev[id].map((v, i) => (i === index ? !v : v))
        : [false, false, false],
    }));
  };

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            verticalAlign: "middle",
            paddingY: 1,
            width: "55%",
            paddingLeft: `${
              level === 2
                ? level * 42
                : level > 0
                  ? level * 32 + 30
                  : level * 32 + 40
            }px`,
            position: "relative",
            //   backgroundColor: level === 2 ? 'red' : 'inherit'
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {node.children && (
              <IconButton
                onClick={() => handleExpand(node.id)}
                size="small"
                sx={{
                  position: "absolute",
                  left: `${level > 0 ? level * 35 : level * 32 + 10}px`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {expanded[node.id] ? <ExpandMore /> : <ChevronRight />}
              </IconButton>
            )}
            <span
              style={{
                marginLeft: node.children ? "0px" : "0px",
                fontStyle: level > 0 ? "italic" : "inherit",
              }}
            >
              {node.name}
            </span>
          </div>
        </TableCell>
        {[0, 1, 2].map((idx) => (
          <TableCell
            key={idx}
            align="center"
            sx={{
              verticalAlign: "middle",
              paddingY: 1,
              width: "15%",
            }}
          >
            <Checkbox
              checked={checked[node.id]?.[idx] || false}
              onChange={() => handleCheck(node.id, idx)}
              sx={{ padding: 0 }}
            />
          </TableCell>
        ))}
      </TableRow>

      {node.children && (
        <TableRow>
          <TableCell colSpan={4} sx={{ padding: 0 }}>
            <Collapse in={expanded[node.id]} timeout="auto" unmountOnExit>
              <Table
                sx={{
                  tableLayout: "fixed",
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                }}
              >
                <TableBody>
                  {node.children.map((child) => (
                    <TreeNodeRow
                      key={child.id}
                      node={child}
                      level={level + 1}
                    />
                  ))}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const TreeTableView: React.FC = () => {
  return (
    <TableContainer>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "55%", paddingY: 1 }}>Nama</TableCell>
            <TableCell align="center" sx={{ width: "15%", paddingY: 1 }}>
              Bisa Perencanaan?
            </TableCell>
            <TableCell align="center" sx={{ width: "15%", paddingY: 1 }}>
              Hanya Melihat?
            </TableCell>
            <TableCell align="center" sx={{ width: "15%", paddingY: 1 }}>
              Bisa Isi Aktual KPI?
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((node) => (
            <TreeNodeRow key={node.id} node={node} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TreeTableView;

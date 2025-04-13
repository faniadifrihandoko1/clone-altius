"use client";

import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { EmployeeProps } from "..";

const Card = styled.div`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  background: white;
  cursor: grab;
  text-align: center;
  width: 150px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto; /* Center the card */
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;

const DraggableNode: React.FC<{
  employee: EmployeeProps;
  moveNode: (draggedId: number, targetId: number) => void;
}> = ({ employee, moveNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, drag] = useDrag({
    type: "NODE",
    item: { id: employee.OrganizationStructureId },
  });

  const [, drop] = useDrop({
    accept: "NODE",
    drop: (draggedItem: { id: number }) => {
      if (draggedItem.id !== employee.OrganizationStructureId) {
        moveNode(draggedItem.id, employee.OrganizationStructureId);
      }
    },
  });

  const mergedRef = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node;
      drag(node);
      drop(node);
    },
    [drag, drop]
  );

  return (
    <div ref={mergedRef}>
      <Card className="p-4 relative">
        <Avatar
          src={employee.PathPhoto || "https://via.placeholder.com/60"}
          alt={employee.EmployeeName}
        />
        <strong>{employee.Name}</strong>
        <p>{employee.EmployeeName || "Unknown"}</p>
      </Card>
    </div>
  );
};

export const TabDiagram = ({ data }: { data: EmployeeProps[] }) => {
  const [treeData, setTreeData] = useState<EmployeeProps[]>(data);

  const rootNode = treeData.find((node) => node.ParentLevelId === null);

  const moveNode = (draggedId: number, targetId: number) => {
    setTreeData((prev) =>
      prev.map((node) =>
        node.OrganizationStructureId === draggedId
          ? { ...node, ParentLevelId: targetId }
          : node
      )
    );
  };

  const buildTree = (parentId: number): React.ReactNode => {
    const children = treeData.filter((node) => node.ParentLevelId === parentId);

    if (children.length === 0) return null;

    return children.map((child) => (
      <TreeNode
        key={child.OrganizationStructureId}
        label={<DraggableNode employee={child} moveNode={moveNode} />}
      >
        {buildTree(child.OrganizationStructureId)}
      </TreeNode>
    ));
  };

  if (!rootNode) {
    return <div>Tidak ada root node ditemukan</div>;
  }

  return (
    <div style={{ textAlign: "center", width: "100%", overflow: "auto" }}>
      <Tree
        lineWidth="2px"
        lineColor="green"
        lineBorderRadius="10px"
        lineHeight="30px"
        label={<DraggableNode employee={rootNode} moveNode={moveNode} />}
      >
        {buildTree(rootNode.OrganizationStructureId)}
      </Tree>
    </div>
  );
};

import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { BsPlus } from "react-icons/bs";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { EmployeeProps } from "../tab";

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
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1 shadow-lg z-10 cursor-pointer hover:bg-blue-700">
          <BsPlus size={16} />
        </div>
        {/* <div className="absolute -top-0 -left-1  text-gray-600 rounded-full p-1  z-10 cursor-pointer">
          <IoMdMore size={20} />
        </div> */}
      </Card>
    </div>
  );
};

export const ExampleTree = ({ data }: { data: EmployeeProps[] }) => {
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

  // Fungsi rekursif untuk membangun tree
  const buildTree = (parentId: number): React.ReactNode => {
    // Cari semua node yang ParentLevelId-nya sama dengan parentId
    const children = treeData.filter((node) => node.ParentLevelId === parentId);

    // Jika tidak ada children, return null
    if (children.length === 0) return null;

    // Render children dan turunannya
    return children.map((child) => (
      <TreeNode
        key={child.OrganizationStructureId}
        label={<DraggableNode employee={child} moveNode={moveNode} />}
      >
        {buildTree(child.OrganizationStructureId)}
      </TreeNode>
    ));
  };

  // Jika tidak ada root node, tampilkan pesan
  if (!rootNode) {
    return <div>Tidak ada root node ditemukan</div>;
  }

  return (
    // <DndProvider backend={HTML5Backend}>
    <div style={{ textAlign: "center", width: "100%", overflow: "auto" }}>
      <Tree
        lineWidth="2px"
        lineColor="green"
        lineBorderRadius="10px"
        lineHeight="30px"
        label={<DraggableNode employee={rootNode} moveNode={moveNode} />}
      >
        {/* Mulai membangun tree dari children root node */}
        {buildTree(rootNode.OrganizationStructureId)}
      </Tree>
    </div>
    // </DndProvider>
  );
};

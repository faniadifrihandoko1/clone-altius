"use client";

import { CustomTreeTable } from "@/components/comon/custom-table/custom-tree-table";
import { dataOrgStrutcureTree } from "@/utils/constans/data";
import { useState } from "react";
import { ModalConfirmMove } from "../modal/confirm-move";
import { ModalCopyOtherPeriod } from "../modal/copy-other-period";
import { useTableColumns } from "./list-column";

export const TableOrganizationStructure = () => {
  const [treeData, setTreeData] = useState<any[]>(dataOrgStrutcureTree);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [draggedNode, setDraggedNode] = useState<{
    draggedId: number;
    targetId: number;
  } | null>(null);
  const columns = useTableColumns();

  const handleDragStart = (draggedId: number, targetId: number) => {
    setDraggedNode({ draggedId, targetId });
  };

  const handleConfirmMove = () => {
    if (draggedNode) {
      setTreeData((prev) =>
        prev.map((node) =>
          node.Id === draggedNode.draggedId
            ? { ...node, ParentLevelId: draggedNode.targetId }
            : node
        )
      );
    }
    setDraggedNode(null);
  };

  const handleCancelMove = () => {
    setDraggedNode(null);
  };

  const draggedNodeName = draggedNode
    ? treeData.find((node) => node.Id === draggedNode.draggedId)?.NameAsWorkUnit
    : "";

  const handleCopyModal = () => setIsCopyModalOpen(!isCopyModalOpen);

  return (
    <>
      <CustomTreeTable
        columns={columns}
        rows={treeData}
        showBorder={true}
        rowHeight={40}
        columnHeaderHeight={35}
        enableDrag
        moveNode={handleDragStart}
        onCopyClick={handleCopyModal}
      />

      {draggedNode && (
        <ModalConfirmMove
          draggedNode={draggedNode}
          draggedNodeName={draggedNodeName}
          handleCancelMove={handleCancelMove}
          handleConfirmMove={handleConfirmMove}
        />
      )}
      {isCopyModalOpen && (
        <ModalCopyOtherPeriod open={isCopyModalOpen} toggle={handleCopyModal} />
      )}
    </>
  );
};

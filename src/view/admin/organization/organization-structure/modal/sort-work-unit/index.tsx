"use client";

import ModalAny from "@/components/comon/custom-modal/modal-any";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

interface ItemType {
  Id: number;
  Name: string;
}

const ITEM_TYPE = "SORTABLE_ITEM";

interface SortableItemProps {
  item: ItemType;
  index: number;
  moveItem: (fromIndex: number, toIndex: number) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({
  item,
  index,
  moveItem,
  activeIndex,
  setActiveIndex,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isActive = activeIndex === item.Id;

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: useCallback(
      (draggedItem: { index: number }) => {
        if (draggedItem.index !== index) {
          setTimeout(() => {
            moveItem(draggedItem.index, index);
            draggedItem.index = index;
          }, 500); // Menambahkan delay untuk smooth effect
        }
      },
      [index, moveItem]
    ),
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
    <Box
      ref={mergedRef}
      onClick={() => setActiveIndex(isActive ? null : item.Id)}
      sx={{
        p: 0.5,
        mb: 0.5,
        cursor: "grab",
        borderRadius: "2px",
        backgroundColor: isActive ? "#d1eaff" : "#f5f5f5",
        opacity: isDragging ? 0.5 : 1,
        transition: "all 0.2s ease-in-out",
        ":hover": { backgroundColor: "#e0f7fa" },
      }}
    >
      <Typography>{item.Name}</Typography>
    </Box>
  );
};

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalSortUnitWork: React.FC<Props> = ({ open, toggle }) => {
  const t = useTranslations("organization.org-structure.modal.sort");
  const [data, setData] = useState<ItemType[]>([
    { Id: 1645, Name: "SDM" },
    { Id: 1647, Name: "Dev IT" },
    { Id: 1648, Name: "Marketing" },
    { Id: 1649, Name: "Finance" },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const moveItem = (fromIndex: number, toIndex: number) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      const [movedItem] = updatedData.splice(fromIndex, 1);
      updatedData.splice(toIndex, 0, movedItem);
      return updatedData;
    });
  };

  return (
    <ModalAny
      title={t("title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={() => {}}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ p: 1, backgroundColor: "#fcf8e3" }}>
          <Typography fontSize={13} color="#31708f">
            <span style={{ fontWeight: "bold" }}>Tip : </span>
            {t("info")}
          </Typography>
        </Box>

        <Box
          sx={{
            height: 250,
            border: "1px solid #ccc",
            overflowY: "auto",
            p: 0.5,
          }}
        >
          {data.map((item, index) => (
            <SortableItem
              key={item.Id}
              item={item}
              index={index}
              moveItem={moveItem}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </Box>
      </Box>
    </ModalAny>
  );
};

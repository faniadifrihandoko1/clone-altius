import { Box, Typography } from "@mui/material";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ITEM_TYPE = "SORTABLE_ITEM";

interface SortableItemProps {
  item: any;
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
  const isActive = activeIndex === item?.Id;

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
          }, 500);
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

export default SortableItem;

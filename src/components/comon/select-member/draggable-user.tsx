import { Box, ListItemText } from "@mui/material";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { UserSelect } from "./interfaces";

const DraggableUser = ({
  user,
  index,
  activeIndex,
  setActiveIndex,
  handleDragEnd,
  handleHover,
  columnType,
}: {
  user: UserSelect;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  handleHover: (index: number) => void;
  handleDragEnd: (dragIndex: number) => void;
  columnType: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isActive = activeIndex === user.UserAccountId;

  const [{ isDragging }, drag] = useDrag({
    type: "USER",
    item: { UserAccountId: user.UserAccountId, index, sourceType: columnType },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (
        dropResult &&
        "type" in (dropResult as object) &&
        (dropResult as any).type === columnType
      ) {
        handleDragEnd(item.index);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "USER",
    hover: (draggedItem: any) => {
      if (draggedItem.sourceType === columnType) {
        handleHover(index);
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
    <Box
      ref={mergedRef}
      sx={{
        p: 0.5,
        mb: 0.5,
        ":hover": { backgroundColor: "#e0f7fa" },
        backgroundColor: isActive ? "#d1eaff" : "#f5f5f5",
        cursor: "grab",
        border: "1px solid #ddd",
        borderRadius: 1,
        opacity: isDragging ? 0.5 : 1,
      }}
      onClick={() => setActiveIndex(isActive ? null : user.UserAccountId)}
    >
      <ListItemText primary={user.EmployeeFullName} />
    </Box>
  );
};

export default DraggableUser;

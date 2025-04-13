"use client";

import { useDraggable } from "@dnd-kit/core";
import { ListItem, ListItemText } from "@mui/material";
import { Task } from "../type";

type TaskCardProps = {
  task: Task;
};

export function ListName({ task }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <ListItem
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab   px-2 py-0 hover:bg-[#f5f5f5] hover:border-[#363636] hover:border-[2px]  border-[#bdbdbd] border-[2px] rounded-md "
      style={style}
    >
      <ListItemText className="font-medium text-neutral-100">
        {task.name}
      </ListItemText>
    </ListItem>
  );
}

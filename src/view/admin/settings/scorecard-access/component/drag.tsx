"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import { Column as ColumnType, Task } from "../type";
import { Column } from "./columns";

const COLUMNS: ColumnType[] = [
  { id: "not-member", title: "Non Anggota", isMember: false },
  { id: "member", title: "Anggota grup akses ini", isMember: true },
  //   { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    name: "Lutfi Juna",
    isMember: false,
  },
  {
    id: "2",
    name: "Andi Wirajaya",
    isMember: false,
  },
  {
    id: "3",
    name: "Bima Abdullah",
    isMember: false,
  },
  {
    id: "4",
    name: "Dendi Maulana",
    isMember: false,
  },
  {
    id: "5",
    name: "Desi Sawitri",
    isMember: false,
  },
  {
    id: "6",
    name: "Eva Susanti",
    isMember: false,
  },
  {
    id: "7",
    name: "Fendi Dwi",
    isMember: false,
  },
  {
    id: "8",
    name: "Ghani Hidayat",
    isMember: false,
  },
  // { id: "9", name: "Hendra Abdillah", isMember: false },
  // { id: "10", name: "Irfan Hidayat", isMember: false },
  // { id: "11", name: "Joko Anwar", isMember: false },
  // { id: "12", name: "Adi Kurniawan", isMember: false },
  // { id: "13", name: "Budi Santoso", isMember: false },
  // { id: "14", name: "Cahyo Wibowo", isMember: false },
  // { id: "15", name: "Dedi Kurniawan", isMember: false },
  // { id: "16", name: "Eko Prasetyo", isMember: false },
  // { id: "17", name: "Fandi Kurniawan", isMember: false },
  // { id: "18", name: "Gani Kurniawan", isMember: false },
  // { id: "19", name: "Hadi Kurniawan", isMember: false },
  // { id: "20", name: "Iwan Kurniawan", isMember: false },
  // { id: "21", name: "Joko Kurniawan", isMember: false },
  { id: "22", name: "Kadi Kurniawan", isMember: true },
  // { id: "23", name: "Ludi Kurniawan", isMember: true },
];

export default function Drag() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  //   function handleDragEnd(event: DragEndEvent) {
  //     const { active, over } = event;

  //     if (!over) return;

  //     const taskId = active.id as string;
  //     const newStatus = over.id as Task["status"];

  //     setTasks(() =>
  //       tasks.map((task) =>
  //         task.id === taskId
  //           ? {
  //               ...task,
  //               status: newStatus,
  //             }
  //           : task
  //       )
  //     );
  //   }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Cari task yang sedang di-drag
    const activeTask = tasks.find((t) => t.id === activeId);
    if (!activeTask) return;

    // Tentukan kolom target
    let targetColumn = COLUMNS.find((c) => c.id === overId);
    if (!targetColumn) {
      const overTask = tasks.find((t) => t.id === overId);
      targetColumn = COLUMNS.find((c) => c.isMember === overTask?.isMember);
    }

    if (!targetColumn) return;

    // Jika pindah antar kolom
    if (activeTask.isMember !== targetColumn.isMember) {
      setTasks(
        tasks.map((task) =>
          task.id === activeId
            ? { ...task, isMember: targetColumn!.isMember }
            : task
        )
      );
    }
    // Jika reorder dalam kolom
    else {
      const oldIndex = tasks.findIndex((t) => t.id === activeId);
      const newIndex = tasks.findIndex((t) => t.id === overId);

      setTasks(arrayMove(tasks, oldIndex, newIndex));
    }
  }

  return (
    <Grid container spacing={2}>
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => {
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.isMember === column.isMember)}
            />
          );
        })}
      </DndContext>
    </Grid>
  );
}

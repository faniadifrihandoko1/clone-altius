"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Box, Grid2 as Grid, List, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Column as ColumnType, Task } from "../type";
import { ListName } from "./list-name";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

export function Column({ column, tasks }: ColumnProps) {
  const [filter, setFilter] = useState("");

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const filteredTasks = column.isMember
    ? tasks
    : tasks.filter((task) =>
        task.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <Grid size={6} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography fontSize={14} fontWeight={600}>
        {column.title}
      </Typography>
      {!column.isMember && (
        <TextField
          fullWidth
          label="Search Name"
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      )}
      <Box
        ref={setNodeRef}
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <List
          sx={{
            px: 1,
            border: "1px solid #ccc",
            flex: 1,
            minHeight: "300px",
            maxHeight: "300px",
            // overflowY: "auto",
          }}
        >
          <SortableContext
            items={filteredTasks.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks.map((task) => (
              <ListName key={task.id} task={task} />
            ))}
          </SortableContext>
        </List>
      </Box>
    </Grid>
  );
}

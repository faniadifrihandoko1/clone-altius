import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

interface SortableItemProps {
  id: string;
  name: string;
}

const SortableItem = ({ id, name }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Paper ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListItem>
        <ListItemText  primary={name} />
      </ListItem>
    </Paper>
  );
};

export default SortableItem;

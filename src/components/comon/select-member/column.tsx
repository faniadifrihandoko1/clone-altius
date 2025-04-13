import { Box, Paper, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableUser from "./draggable-user";
import { UserSelect } from "./interfaces";

const Column = ({
  title,
  users,
  setUsers,
  otherUsers,
  setOtherUsers,
  activeIndex,
  setActiveIndex,
  columnType,
}: {
  title: string;
  users: UserSelect[];
  setUsers: (users: UserSelect[]) => void;
  otherUsers: UserSelect[];
  setOtherUsers: (users: UserSelect[]) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  moveAllLeft: () => void;
  moveAllRight: () => void;
  columnType: string;
}) => {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const hoverIndexRef = useRef<number | null>(null);
  const [search, setSearch] = useState("");
  const t = useTranslations("comon.textFieldSearch");

  const handleHover = useCallback((index: number) => {
    hoverIndexRef.current = index;
  }, []);
  const moveUser = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (
        dragIndex < 0 ||
        hoverIndex < 0 ||
        dragIndex >= users.length ||
        hoverIndex >= users.length
      )
        return;

      const newUsers = [...users];
      const [movedUser] = newUsers.splice(dragIndex, 1);
      if (!movedUser) return; // Cegah error jika undefined
      newUsers.splice(hoverIndex, 0, movedUser);
      setUsers(newUsers);
    },
    [users, setUsers]
  );

  const handleDragEnd = useCallback(
    (dragIndex: number) => {
      const hoverIndex = hoverIndexRef.current;
      if (hoverIndex !== null && dragIndex !== hoverIndex) {
        moveUser(dragIndex, hoverIndex);
      }
      hoverIndexRef.current = null;
    },
    [moveUser]
  );

  const [, drop] = useDrop({
    accept: "USER",

    drop: (item: UserSelect) => {
      const movedUser = otherUsers.find(
        (u) => u?.UserAccountId === item?.UserAccountId
      );
      if (movedUser) {
        setUsers([...users, movedUser]);
        setOtherUsers(
          otherUsers.filter((u) => u?.UserAccountId !== item?.UserAccountId)
        );
      }
    },
  });

  const mergedRef = useCallback(
    (node: HTMLDivElement | null) => {
      dropRef.current = node;
      drop(node);
    },
    [drop]
  );
  const filteredUsers = users.filter((user) =>
    user.EmployeeFullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box ref={mergedRef} sx={{ flex: 1 }}>
      <Typography fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder={t("placeholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: 0.5 }}
      />
      <Paper
        ref={mergedRef}
        variant="outlined"
        sx={{ flex: 1, padding: 1, height: 350, overflowY: "auto" }}
      >
        {filteredUsers?.map((user, index) => (
          <DraggableUser
            key={user.UserAccountId}
            user={user}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            handleDragEnd={handleDragEnd}
            handleHover={handleHover}
            columnType={columnType}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default Column;

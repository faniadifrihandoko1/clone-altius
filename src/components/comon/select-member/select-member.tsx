import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Column from "./column";
import { SelectMembersProps } from "./interfaces";

const SelectMembers = ({
  members,
  nonMembers,
  setMembers,
  setNonMembers,
}: SelectMembersProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("comon.custom-component.select-member");
  const moveAllRight = () => {
    setMembers([...members, ...nonMembers]);
    setNonMembers([]);
  };
  const moveAllLeft = () => {
    setNonMembers([...nonMembers, ...members]);
    setMembers([]);
  };
  return (
    // <DndProvider backend={HTML5Backend}>
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Column
        title={t("title.members")}
        users={nonMembers}
        setUsers={setNonMembers}
        otherUsers={members}
        setOtherUsers={setMembers}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        moveAllLeft={moveAllLeft}
        moveAllRight={moveAllRight}
        columnType="nonMembers"
      />
      {/* Tombol pindah semua */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Tooltip title={t("tooltip.arrowForward")} arrow>
          <IconButton
            onClick={moveAllRight}
            sx={{
              border: "1px solid #ddd",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <ArrowForward fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title={t("tooltip.arrowBack")} arrow>
          <IconButton
            onClick={moveAllLeft}
            sx={{
              border: "1px solid #ddd",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Column
        title={t("title.non-members")}
        users={members}
        setUsers={setMembers}
        otherUsers={nonMembers}
        setOtherUsers={setNonMembers}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        moveAllLeft={moveAllLeft}
        moveAllRight={moveAllRight}
        columnType="members"
      />
    </Box>
    // </DndProvider>
  );
};

export default SelectMembers;

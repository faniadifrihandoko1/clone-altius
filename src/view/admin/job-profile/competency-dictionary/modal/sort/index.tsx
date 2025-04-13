"use client";

import ModalAny from "@/components/comon/custom-modal/modal-any";
import SortableItem from "@/components/comon/sort/sortable-item";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalSortElement: React.FC<Props> = ({ open, toggle }) => {
  const t = useTranslations("job-profile.master-position.modal.sort");
  const [data, setData] = useState<any[]>([
    {
      Name: "Teknis",
      FluencyLevel: 0,
      IsAppraisal: true,
      DataPeriodId: 1000296,
      ItemOrder: null,
      Weight: 60.0,
      DataPeriod: null,
      CoreCompetencies: [],
      IsDeleted: false,
      CreatedDate: null,
      CreatedBy: null,
      ModifiedDate: null,
      ModifiedBy: null,
      Id: 1000043,
    },
    {
      Name: "Managerial",
      FluencyLevel: 0,
      IsAppraisal: true,
      DataPeriodId: 1000296,
      ItemOrder: null,
      Weight: 40.0,
      DataPeriod: null,
      CoreCompetencies: [],
      IsDeleted: false,
      CreatedDate: null,
      CreatedBy: null,
      ModifiedDate: null,
      ModifiedBy: null,
      Id: 1000044,
    },
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

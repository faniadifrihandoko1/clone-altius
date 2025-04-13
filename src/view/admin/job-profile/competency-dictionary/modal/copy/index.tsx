"use client";

import ModalAny from "@/components/comon/custom-modal/modal-any";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const ModalCopyOtherPeriod: React.FC<Props> = ({ open, toggle }) => {
  const t = useTranslations("job-profile.master-position.modal.copy");
  const [data] = useState([
    {
      Id: 17,
      CustomerId: null,
      Name: "Tahun 2022",
      StartDate: "2022-01-01T00:00:00",
      EndDate: "2022-12-31T00:00:00",
    },
    {
      Id: 19,
      CustomerId: null,
      Name: "Tahun 2023",
      StartDate: "2023-01-01T00:00:00",
      EndDate: "2023-12-31T00:00:00",
    },
    {
      Id: 1000285,
      CustomerId: null,
      Name: "Tahun 2021",
      StartDate: "2024-01-01T00:00:00",
      EndDate: "2024-12-31T00:00:00",
    },
    {
      Id: 1000296,
      CustomerId: null,
      Name: "Tahun 2025",
      StartDate: "2025-01-01T00:00:00",
      EndDate: "2025-12-31T00:00:00",
    },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <ModalAny
      title={t("title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={() => {}}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Info Section */}
        <Box sx={{ p: 1, backgroundColor: "#fcf8e3" }}>
          <Typography fontSize={13} color="#31708f">
            <span style={{ fontWeight: "bold" }}>Tip : </span>
            {t("info")}
          </Typography>
        </Box>

        {/* List Section */}
        <Box
          sx={{
            height: 250,
            border: "1px solid #ccc",
            overflowY: "auto",
            p: 0.5,
          }}
        >
          {data.map((item) => (
            <Box
              key={item.Id}
              onClick={() => setSelectedId(item.Id)}
              sx={{
                p: 0.5,
                mb: 0.5,
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.2s ease-in-out",
                backgroundColor: selectedId === item.Id ? "#d1eaff" : "#f5f5f5",
                color: selectedId === item.Id ? "white" : "inherit",
                ":hover": { backgroundColor: "#e0f7fa" },
              }}
            >
              <Typography>{item.Name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </ModalAny>
  );
};

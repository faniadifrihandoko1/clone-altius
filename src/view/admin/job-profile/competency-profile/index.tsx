"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalSelectUnitWork } from "./modal/select-unit-work";

const Periode: { id: string; label: string }[] = [
  { id: "2022", label: " Tahun 2022" },
  { id: "2023", label: " Tahun 2023" },
  { id: "2024", label: " Tahun 2024" },
  { id: "2025", label: " Tahun 2025" },
];

export const CompetencyProfileView = () => {
  const t = useTranslations("job-profile.competency-profile");
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [selectedPeriode, setSelectedPeriode] = useState<{
    id: string;
    label: string;
  } | null>(null);

  const toggleSelect = () => setOpenSelect(!openSelect);

  return (
    <CardBodyCustom title={t("card.title")}>
      <Card
        sx={{
          mt: 2,
          p: 2,
          bgcolor: "#f5f5f5",
          borderRadius: "5px",
          display: "flex",
          gap: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "50%",
            alignItems: "center",
          }}
        >
          <Typography fontSize={14} fontWeight={600}>
            {t("filter.label")}
          </Typography>

          <Autocomplete
            sx={{
              minWidth: 160,
              backgroundColor: "#fff",
              ".MuiAutocomplete-inputRoot": {
                minHeight: "25px",
                fontSize: "13px",
              },
            }}
            size="small"
            options={Periode}
            getOptionLabel={(option) => option.label}
            value={selectedPeriode}
            onChange={(_, newValue) => setSelectedPeriode(newValue)}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Tooltip title="Tampilkan Unit Kerja" arrow>
            <Button
              variant="contained"
              size="small"
              className="!font-semibold !text-white h-9"
              onClick={toggleSelect}
            >
              {t("filter.label2")}
            </Button>
          </Tooltip>
        </Box>
      </Card>
      {openSelect && (
        <ModalSelectUnitWork open={openSelect} toggle={toggleSelect} />
      )}
    </CardBodyCustom>
  );
};

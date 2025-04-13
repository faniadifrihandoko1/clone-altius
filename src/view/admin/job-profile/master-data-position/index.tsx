"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import {
  Alert,
  Autocomplete,
  Box,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ListMasterDataPosition } from "./table";

const Periode: { id: string; label: string }[] = [
  { id: "2022", label: " Tahun 2022" },
  { id: "2023", label: " Tahun 2023" },
  { id: "2024", label: " Tahun 2024" },
  { id: "2025", label: " Tahun 2025" },
];

export const MasterDataPositionView = () => {
  const t = useTranslations("job-profile.master-position");
  const [selectedPeriode, setSelectedPeriode] = useState<{
    id: string;
    label: string;
  } | null>(null);

  return (
    <CardBodyCustom title={t("card.title")}>
      <Box
        sx={{
          p: 2,
          bgcolor: "#fcf8e3",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 2,
        }}
      >
        <Alert
          severity="info"
          sx={{ fontSize: 13, color: "#31708f", textAlign: "justify" }}
        >
          {t("card.desc.title1")}
          <br />
          {t("card.desc.title2")}
        </Alert>
      </Box>

      <Card sx={{ mt: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
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
      </Card>

      {/* Optional: Show content when periode selected */}
      <Box>{selectedPeriode && <ListMasterDataPosition />}</Box>
    </CardBodyCustom>
  );
};

"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import { FiFilePlus, FiUploadCloud } from "react-icons/fi";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ListCompetencyDictionary } from "./tabel";

const Periode: { id: string; label: string }[] = [
  { id: "2022", label: " Tahun 2022" },
  { id: "2023", label: " Tahun 2023" },
  { id: "2024", label: " Tahun 2024" },
  { id: "2025", label: " Tahun 2025" },
];
const Clutser: { id: string; label: string }[] = [
  { id: "managerial", label: " Managerial" },
  { id: "teknikal", label: "Teknikal" },
];

export const CompetencyDictionaryView = () => {
  const t = useTranslations("job-profile.competency-dictionary");
  const [selectedPeriode, setSelectedPeriode] = useState<{
    id: string;
    label: string;
  } | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<{
    id: string;
    label: string;
  } | null>(null);

  return (
    <CardBodyCustom title={t("card.title")}>
      {/* <Box
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
      </Box> */}

      <Card
        sx={{
          mt: 2,
          p: 2,
          bgcolor: "#f5f5f5",
          borderRadius: "5px",
          display: "flex",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "50%",
            alignItems: "center",
            // bgcolor: "red",
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
          <Typography fontSize={14} fontWeight={600}>
            {t("filter.label2")}
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
            options={Clutser}
            getOptionLabel={(option) => option.label}
            value={selectedCluster}
            onChange={(_, newValue) => setSelectedCluster(newValue)}
            renderInput={(params) => <TextField {...params} label="" />}
          />
          <Button
            component="label"
            variant="contained"
            size="small"
            startIcon={<FaCloudDownloadAlt size={16} />}
            className="!font-semibold !text-white h-9 "
          >
            Download Template
            <input type="file" hidden />
          </Button>
        </Box>
      </Card>

      {/* Optional: Show content when periode selected */}
      {selectedPeriode && (
        <Box>
          <ListCompetencyDictionary />
          <Card
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "#f5f5f5",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Button
                component="label"
                variant="outlined"
                size="small"
                startIcon={<FiFilePlus size={16} />}
                className="!font-semibold h-9"
              >
                Upload File
                <input type="file" hidden />
              </Button>
              <Button
                variant="contained"
                size="small"
                className="!font-semibold !text-white h-9"
                startIcon={<FiUploadCloud size={16} />}
              >
                Import Kamus Kompetensi Pegawai
              </Button>
            </Box>
          </Card>
        </Box>
      )}
    </CardBodyCustom>
  );
};

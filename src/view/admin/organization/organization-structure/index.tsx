"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { Alert, Box, Card, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { orgStructureFilterForm } from "./schema/filter.schema";
import TabStructure from "./tab";

const Periode: { id: string; label: string }[] = [
  { id: "2022", label: "2022" },
  { id: "2023", label: "2023" },
  { id: "2024", label: "2024" },
  { id: "2025", label: "2025" },
];
export const OrgStructureView = () => {
  const orgStructureForm = useForm<orgStructureFilterForm>({
    defaultValues: {
      periode: null,
    },
  });
  const t = useTranslations("organization.org-structure");

  const { control, watch } = orgStructureForm;

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
          <StaticAutoComplete
            sx={{
              width: 150,
              backgroundColor: "#fff",
              ".MuiAutocomplete-inputRoot": {
                minHeight: "25px", // Atur tinggi input
                fontSize: "13px", // Perkecil font
              },
              // ".MuiOutlinedInput-root": {
              //   padding: "4px", // Kurangi padding
              // },
            }}
            control={control}
            size="small"
            name="periode"
            label=""
            // placeholder={t("table.action.select")}
            options={Periode}
          />
        </Box>
      </Card>
      <Box>{watch("periode") && <TabStructure />}</Box>
    </CardBodyCustom>
  );
};

"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListPerformancePeriod } from "./table";

export const PerformancePeriodView = () => {
  const t = useTranslations("organization.performance-period");

  return (
    <CardBodyCustom title={t("card.title")}>
      <Box
        sx={{
          width: "100%",
          mt: 2,
        }}
      >
        <ListPerformancePeriod />
      </Box>
    </CardBodyCustom>
  );
};

"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import ListTableJobRequest from "./table/list";

export const JobRequestView = () => {
  const t = useTranslations("recruitment.job-request");
  return (
    <CardBodyCustom title={t("card.title")}>
      <Box sx={{ mt: 3 }}>
        <ListTableJobRequest />
      </Box>
    </CardBodyCustom>
  );
};

"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListGenerateNewEmployee } from "./table";
// import ListTableJobRequest from "./table/list";

export const GenerateNewEmployeeView = () => {
  const t = useTranslations("recruitment.generate-new-employee");
  return (
    <CardBodyCustom title={t("card.title")}>
      <Box sx={{ mt: 3 }}>
        <ListGenerateNewEmployee />
      </Box>
    </CardBodyCustom>
  );
};

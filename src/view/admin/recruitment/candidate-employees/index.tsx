"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListCandidateEmployee } from "./table";

export const CandidateEmployeesView = () => {
  const t = useTranslations("recruitment.candidat-employee");

  return (
    <CardBodyCustom title={t("card.title")}>
      <Box
        sx={{
          width: "100%",
          mt: 2,
        }}
      >
        <ListCandidateEmployee />
      </Box>
    </CardBodyCustom>
  );
};

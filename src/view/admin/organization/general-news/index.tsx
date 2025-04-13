"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Alert, Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListGeneralNews } from "./table";

const GeneralNewsView = () => {
  const t = useTranslations("organization.general-news");

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
        <Alert severity="info" sx={{ fontSize: 13, textAlign: "justify" }}>
          {t("card.desc")}
        </Alert>
      </Box>
      <Box mt={2}>
        <ListGeneralNews />
      </Box>
    </CardBodyCustom>
  );
};

export default GeneralNewsView;

"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListJenisCuti } from "./table/table-jenis-cuti";
import { ListJenisLembur } from "./table/table-jenis-lembur";
import { ListMasterShift } from "./table/table-master-shift";

export const DataMasterHRView = () => {
  const t = useTranslations("general-hr.masterData");
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
        <Typography textAlign={"justify"} fontSize={13} color="#31708f">
          {t("card.desc.title1")}
        </Typography>
        <Typography textAlign={"justify"} fontSize={13} color="#31708f">
          {t("card.desc.title2")}
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2} alignItems="flex-start">
        <Grid size={12}>
          <CardBodyCustom
            title={t("tables.leaveTypes.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListJenisCuti />
          </CardBodyCustom>
        </Grid>
        <Grid size={12}>
          <CardBodyCustom
            title={t("tables.overtimeTypes.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListJenisLembur />
          </CardBodyCustom>
        </Grid>
        <Grid size={12}>
          <CardBodyCustom
            title={t("tables.shiftMaster.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListMasterShift />
          </CardBodyCustom>
        </Grid>
      </Grid>
    </CardBodyCustom>
  );
};

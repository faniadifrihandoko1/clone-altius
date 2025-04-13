"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListAgama } from "./table/table-agama";
import { ListAlasanBerhentiKerja } from "./table/table-alasan-berhenti-kerja";
import { ListJenisHubunganKerabat } from "./table/table-jenis-hubungan-kerabat";
import { ListJenjangPendidikan } from "./table/table-jenjang-pendidikan";
import { ListLevelUnitKerja } from "./table/table-level-unit-kerja";
import { ListStatusKepegawaian } from "./table/table-status-kepegawaian";
import { ListTipeIdentitas } from "./table/table-tipe-identitas";

export const CategoryView = () => {
  const t = useTranslations("general-hr.category");

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
        {[
          {
            component: <ListStatusKepegawaian />,
            title: t("tables.employmentStatus.title"),
          },
          {
            component: <ListJenisHubunganKerabat />,
            title: t("tables.relationshipType.title"),
          },
          {
            component: <ListJenjangPendidikan />,
            title: t("tables.educationLevel.title"),
          },
          {
            component: <ListAlasanBerhentiKerja />,
            title: t("tables.terminationReason.title"),
          },
          {
            component: <ListLevelUnitKerja />,
            title: t("tables.workUnitLevel.title"),
          },
          {
            component: <ListTipeIdentitas />,
            title: t("tables.identityType.title"),
          },
          { component: <ListAgama />, title: t("tables.religion.title") },
        ].map((item, index) => (
          <Grid key={index} size={6}>
            <CardBodyCustom
              title={item.title}
              showToggle
              classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
              classNameSubCard="!pb-0"
              classNameTitle="!text-base"
            >
              <Box sx={{ flex: 1 }}>{item.component}</Box>
            </CardBodyCustom>
          </Grid>
        ))}
      </Grid>
    </CardBodyCustom>
  );
};

"use client";

import CardBodyCustom from "@/components/comon/custom-table/body";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ListDepartemen } from "./table/table-departmen";
import { ListDivisi } from "./table/table-divisi";
import { ListHariLibur } from "./table/table-hari-libur";
import { ListJenisAsetPegawai } from "./table/table-jenis-aset-pegawai";
import { ListJenisDokumen } from "./table/table-jenis-dokumen";
import { ListKeahlianPegawai } from "./table/table-keahlian-pegawai";
import { ListKeluhanPegawai } from "./table/table-keluhan-pegawai";
import { ListLevelKeahlianKhusus } from "./table/table-level-keahlian-khusus";
import { ListLevelKemampuanUmum } from "./table/table-level-kemampuan-umum";
import { ListLevelPosisi } from "./table/table-level-posisi";
import { ListLokasiKantor } from "./table/table-lokasi-kantor";
import { ListStatusPenangananKeluhan } from "./table/table-status-penanganan-keluhan";

export const ReferensiView = () => {
  const t = useTranslations("general-hr.references");

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
            title={t("tables.officeLocation.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListLokasiKantor />
          </CardBodyCustom>
        </Grid>
        <Grid size={12}>
          <CardBodyCustom
            title={t("tables.holidayMaster.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListHariLibur />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.employeeAssetType.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListJenisAsetPegawai />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.documentType.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListJenisDokumen />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.employeeSkill.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListKeahlianPegawai />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.generalSkillLevel.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListLevelKemampuanUmum />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.employeeComplaintType.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListKeluhanPegawai />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.specialSkillLevel.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListLevelKeahlianKhusus />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.complaintHandlingStatus.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListStatusPenangananKeluhan />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.positionLevel.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListLevelPosisi />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.division.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListDivisi />
          </CardBodyCustom>
        </Grid>
        <Grid size={6}>
          <CardBodyCustom
            title={t("tables.department.title")}
            showToggle
            classNameCard="border border-gray-300 shadow-none !px-4 !py-2"
            classNameSubCard="!pb-0"
            classNameTitle="!text-base"
          >
            <ListDepartemen />
          </CardBodyCustom>
        </Grid>
      </Grid>
    </CardBodyCustom>
  );
};

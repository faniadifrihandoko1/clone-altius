"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { Alert, Box, Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import TableUserAccount from "./table/table-user-account";
import { TableUserRole } from "./table/table-user-role";

export const UserRolesView = () => {
  const t = useTranslations("organization.user-roles");

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
          {t("card.desc.title1")}
        </Alert>
        {/* <Typography textAlign={"justify"} fontSize={13} color="#31708f">
          {t("card.desc.title2")}
        </Typography> */}
      </Box>
      <Grid container spacing={2} mt={2} alignItems="flex-start">
        {[
          {
            component: <TableUserRole />,
            title: t("tables.userRole.title"),
          },
          {
            component: <TableUserAccount />,
            title: t("tables.userAccount.title"),
          },
        ].map((item, index) => (
          <Grid key={index} size={12}>
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

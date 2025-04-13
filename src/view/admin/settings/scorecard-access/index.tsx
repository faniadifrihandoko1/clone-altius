"use client";

import CardBodyCustom from "@/components/comon/custom-table/body";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { Box, Card, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { accessScorecardFilter } from "./schema/filter.schema";
import { List } from "./table/list";

const AccessScorecardView = () => {
  const accessScorecardForm = useForm<accessScorecardFilter>({
    defaultValues: {
      periode: null,
    },
  });

  const Periode: { id: string; label: string }[] = [
    { id: "2022", label: "Tahun 2022" },
    { id: "2023", label: "Tahun 2023" },
    { id: "2024", label: "Tahun 2024" },
    { id: "2025", label: "Tahun 2025" },
  ];

  // const handleAction = (id: number) => {
  //   console.log(`Aksi untuk ID: ${id}`);
  // };

  const { control, watch } = accessScorecardForm;

  return (
    <>
      <CardBodyCustom title={"title"}>
        {/* <HeaderSectionTableCustom /> */}
        <Card sx={{ mt: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: "5px" }}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography fontSize={14}>{"filter"}</Typography>
            <StaticAutoComplete
              sx={{ width: 170, backgroundColor: "#fff" }}
              control={control}
              name="periode"
              label=""
              options={Periode}
            />
          </Box>
        </Card>
        {/* <Drag /> */}
        {watch("periode") && <List />}
      </CardBodyCustom>
    </>
  );
};

export default AccessScorecardView;

"use client";

import { ModalAny } from "@/components/comon/custom-modal";
import { CustomDatePicker } from "@/components/comon/input/date-picker/custom-date-picker";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Divider,
  FormControlLabel,
  Grid2 as Grid,
  Radio,
  RadioGroup,
  Tab,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  detailjobRequestFormValues,
  detailjobRequestSchemas,
} from "../../schema/detail.scehma";

interface Props {
  open: boolean;
  toggle: () => void;
}

const ModalDetailJobRequest = ({ open, toggle }: Props) => {
  const [value, setValues] = useState("1");

  const detailJobRequestForm = useForm<detailjobRequestFormValues>({
    defaultValues: {
      data: {},
      reqruitment: "test",
      taskDuty: "test",
    },
    resolver: zodResolver(detailjobRequestSchemas),
  });

  const { control } = detailJobRequestForm;

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };

  return (
    <ModalAny
      title="Permintaan Tenaga Kerja"
      open={open}
      toggle={toggle}
      maxWidth="sm"
      handleSave={() => {}}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="Detail Job Request Tabs"
            variant="scrollable"
            sx={{
              "& .MuiTab-root": { color: "gray" },
              "& .MuiTab-root.Mui-selected": {
                color: "blue",
                fontWeight: "bold",
              },
              "& .MuiTabs-indicator": { backgroundColor: "blue" },
            }}
          >
            <Tab label="Data" value="1" />
            <Tab label="Persyaratan" value="2" />
            <Tab label="Tugas & Tanggung Jawab" value="3" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}
        >
          <Box component="form" noValidate>
            <Grid container spacing={1}>
              <Grid size={6}>
                <CustomDatePicker
                  control={control}
                  name="data.submissionDate"
                  label="Tanggal Pengajuan"
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.submission"
                  label="Nomor Pengajuan"
                  disabled
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={1}>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.departement"
                  label="Departemen"
                  disabled
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.position"
                  label="Jabatan"
                  disabled
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.requestType"
                  label="Jenis Permintaan"
                  disabled
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={1}>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.maxAge"
                  label="Usia Maksimal (Tahun)"
                  disabled
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.minSalary"
                  label="Gaji Minimal"
                  disabled
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.workExperience"
                  label="Pengalaman Kerja (Tahun)"
                  disabled
                />
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.maxSalary"
                  label="Gaji Maksimal"
                  disabled
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={1}>
              <Grid size={6}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Typography fontWeight={600} fontSize={13}>
                    Jenis Kelamin
                  </Typography>
                  <Controller
                    name="data.gender"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Pria"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Wanita"
                        />
                      </RadioGroup>
                    )}
                  />
                </Box>
              </Grid>
              <Grid size={6}>
                <CustomTextField
                  control={control}
                  name="data.education"
                  label="Penidikan Minimal"
                  disabled
                />
              </Grid>
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel
          value="2"
          sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <CustomTextField
                control={control}
                name="reqruitment"
                label=""
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <CustomTextField
                control={control}
                name="taskDuty"
                label=""
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </ModalAny>
  );
};

export default ModalDetailJobRequest;

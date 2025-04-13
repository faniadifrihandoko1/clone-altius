"use client";

import { ModalAdd } from "@/components/comon/custom-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormAddress from "../../form/form-address";
import FormAssesment from "../../form/form-assesment";
import FormData from "../../form/form-data";
import {
  candidatEmployeeFormValues,
  candidatEmployeeSchemas,
} from "../../schema/detail.scehma";

interface Props {
  open: boolean;
  toggle: () => void;
}

const ModalAddCandidateEmployee = ({ open, toggle }: Props) => {
  const [value, setValues] = useState("1");
  const t = useTranslations("recruitment.candidat-employee");

  const detailJobRequestForm = useForm<candidatEmployeeFormValues>({
    defaultValues: {
      data: {},
      Address: {},
      Assessment: "test",
    },
    resolver: zodResolver(candidatEmployeeSchemas),
  });

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValues(newValue);
  };

  return (
    <ModalAdd
      title={t("card.title")}
      open={open}
      toggle={toggle}
      maxWidth="sm"
      handleSave={() => {}}
    >
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="Detail Job Request Tabs"
          variant="scrollable"
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            p: 1,
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "center",
            mb: 2,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: 14,
              minHeight: "40px",
              minWidth: "auto",
              px: 3,
              mx: 0.5,
              borderRadius: "10px",
              transition: "all 0.3s ease",
              color: "#757575",
            },
            "& .MuiTab-root.Mui-selected": {
              backgroundColor: "#ffffff",
              color: "GrayText",
              fontWeight: 600,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label={t("tab.tab-data")} value="1" />
          <Tab label={t("tab.tab-condition")} value="2" />
          <Tab label={t("tab.tab-task")} value="3" />
        </TabList>

        <TabPanel
          value="1"
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            px: 2,
          }}
        >
          <FormData form={detailJobRequestForm} />
        </TabPanel>

        <TabPanel value="2" sx={{ px: 1 }}>
          <FormAddress form={detailJobRequestForm} />
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}
        >
          <FormAssesment form={detailJobRequestForm} />
        </TabPanel>
      </TabContext>
    </ModalAdd>
  );
};

export default ModalAddCandidateEmployee;

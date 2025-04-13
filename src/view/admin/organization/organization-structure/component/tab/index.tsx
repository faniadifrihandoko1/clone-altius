"use client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { ExampleTree } from "../tree-node";

export type EmployeeProps = {
  OrganizationStructureId: number;
  ParentLevelId: number | null;
  Name: string;
  ParentName?: string;
  PathPhoto: string;
  EmployeeName: string;
};

const organizationData: EmployeeProps[] = [
  {
    OrganizationStructureId: 1678,
    ParentLevelId: null,
    Name: "Direktur Utama",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/1670898926822.png",
    EmployeeName: "Angga Wijaya",
  },
  {
    OrganizationStructureId: 1679,
    ParentLevelId: 1678,
    Name: "Manager SDM",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/1670899252237.png",
    EmployeeName: "Desi Sawitri",
  },
  {
    OrganizationStructureId: 1680,
    ParentLevelId: 1679,
    Name: "Staff SDM #1",
    ParentName: "Manager SDM",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/1670899684842.png",
    EmployeeName: "Bima Abdulah",
  },
  {
    OrganizationStructureId: 1681,
    ParentLevelId: 1678,
    Name: "Manager IT",
    ParentName: "Direktur Utama",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/1670915192344.png",
    EmployeeName: "Dendi Maulana",
  },
  {
    OrganizationStructureId: 1682,
    ParentLevelId: 1681,
    Name: "Developer #1",
    ParentName: "Manager IT",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/cc93aea4-6080-4120-a5c8-6be02890dd6a.png",
    EmployeeName: "Eva Susanti",
  },
  {
    OrganizationStructureId: 1683,
    ParentLevelId: 1679,
    Name: "Designer #1",
    ParentName: "Manager SDM",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/company/1212/employeeProfile/1670922865481.png",
    EmployeeName: "Lutfi Juna",
  },
  {
    OrganizationStructureId: 1684,
    ParentLevelId: 1681,
    Name: "IT Security #1",
    ParentName: "Manager IT",
    PathPhoto:
      "https://altiusstoragetest.blob.core.windows.net/imagecontainer/photo/Enterprise/Asset/1663406928054.png",
    EmployeeName: "Jefri Junaidi",
  },
];

export default function TabStructure() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tree" value="1" />
            <Tab label="Diagram" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Tree data</TabPanel>
        <TabPanel value="2">
          {" "}
          <ExampleTree data={organizationData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

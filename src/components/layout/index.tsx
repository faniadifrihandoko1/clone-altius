"use client";

import { useApplicationSettings } from "@/services/use-layout";
import { dummyNavbarItem } from "@/utils/constans/data";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { Header } from "./header";
import { Sidebars } from "./sidebars";

export const appBarHeight = 50;
const normalSideBarWidth = 250;
const miniSideBarWidth = 60;

export const LayoutDashboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isExpandDrawer = useApplicationSettings(
    (state) => state.value.expandSidebar
  );
  const drawerWidth = useMemo(
    () => (isExpandDrawer ? normalSideBarWidth : miniSideBarWidth),
    [isExpandDrawer]
  );

  if (isExpandDrawer === undefined) {
    return null; // Wait until state is ready
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        // visibility: isExpandDrawer === undefined ? "hidden" : "visible",
      }}
    >
      <Sidebars drawerWidth={drawerWidth} menuItems={dummyNavbarItem} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "auto",
          width: `calc(100vw - ${drawerWidth}px)`,
        }}
      >
        <Box
          sx={({ breakpoints }) => ({
            height: `${appBarHeight}px`,
            width: "100%",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            padding: "6px 24px",
            zIndex: 1100,
            transition: "width 0.3s ease-in-out",
            [breakpoints.down("md")]: {
              width: "100vw",
              position: "fixed",
              top: 0,
              padding: "0px",
            },
          })}
        >
          <Header drawerWidth={drawerWidth} />
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={({ breakpoints }) => ({
            paddingX: "24px",
            paddingTop: `${appBarHeight + 10}px`,
            marginTop: `5px`,
            marginBottom: "10px",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            width: "100%",
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "4px",
            },
            transition: "width 0.3s ease-in-out",
            [breakpoints.down("md")]: {
              padding: "6px 16px",
              maxWidth: "100vw",
              marginTop: `${appBarHeight + 40}px`,
            },
          })}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

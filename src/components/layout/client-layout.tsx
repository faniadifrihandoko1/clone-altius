// src/components/layout/ClientLayoutWrapper.tsx
"use client";

import { useApplicationSettings } from "@/services/use-layout";
import { dummyNavbarItem } from "@/utils/constans/data";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

const normalSideBarWidth = "250";
const miniSideBarWidth = "60";
export const appBarHeight = 50;

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
      <Sidebar drawerWidth={drawerWidth} menuItems={dummyNavbarItem} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "auto",
          width: `calc(100vw - ${drawerWidth}px)`,
          transition: "width 0.3s ease",
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
            zIndex: 1,
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
          {/* <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <CircularProgress color="inherit" />
              </div>
            }
          > */}
          {children}
          {/* </Suspense> */}
        </Box>
      </Box>
    </>
  );
}

// src/app/[locale]/layout.tsx
import { LayoutDashboard } from "@/components/layout";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <ClientLayoutWrapper>{children}</ClientLayoutWrapper> */}
      <LayoutDashboard>{children}</LayoutDashboard>
    </Box>
  );
}

"use client";
import { useGetTheme } from "@/utils/theme/theme";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface ThemeWrapperProps {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useGetTheme();

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DndProvider>
    </ThemeProvider>
  );
};

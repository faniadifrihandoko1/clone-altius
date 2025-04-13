"use client";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <CircularProgress color="inherit" />
    </div>
  );
}

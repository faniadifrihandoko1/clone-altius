"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

/**
 * Hook untuk mengambil translasi berdasarkan module di URL.
 * @param {number} stepFromEnd - Posisi module dari akhir pathname.
 * @returns {Function} - Fungsi translasi dari next-intl.
 */
export function useModuleTranslations(stepFromEnd: number = 2) {
  const pathname = usePathname(); // Ambil URL saat ini
  const segments = pathname.split("/").filter(Boolean); // Pisahkan berdasarkan "/" dan hapus string kosong

  // Pastikan tidak melebihi panjang segments
  const moduleIndex = Math.max(0, segments.length - stepFromEnd);

  const moduleName = segments[moduleIndex] || "default"; // Default jika tidak ditemukan

  return useTranslations(moduleName);
}

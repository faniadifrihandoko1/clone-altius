import { z } from "zod";

export const levelKeahlianKhususSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type levelKeahlianKhususFormValues = z.infer<
  typeof levelKeahlianKhususSchema
>;

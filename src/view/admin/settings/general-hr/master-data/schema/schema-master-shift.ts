import { z } from "zod";

export const masterShiftSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const nestedMasterShiftSchema = z.object({
  day: z.string().min(1, { message: "Nama harus diisi" }),
  in_time: z.string().min(1, { message: "Jam Masuk harus diisi" }),
  out_time: z.string().min(1, { message: "Jam Keluar harus diisi" }),
});

export type masterShiftFormValues = z.infer<typeof masterShiftSchema>;
export type nestedMasterShiftFormValues = z.infer<
  typeof nestedMasterShiftSchema
>;

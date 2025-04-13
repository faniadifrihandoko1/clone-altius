import { z } from "zod";

export const jenisAsetPegawaiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type JenisAsetPegawaiFormValues = z.infer<typeof jenisAsetPegawaiSchema>;

import { z } from "zod";

export const keahlianPegawaiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type KeahlianPegawaiFormValues = z.infer<typeof keahlianPegawaiSchema>;

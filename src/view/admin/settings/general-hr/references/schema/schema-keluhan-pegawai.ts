import { z } from "zod";

export const keluhanPegawaiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type keluhanPegawaiFormValues = z.infer<typeof keluhanPegawaiSchema>;

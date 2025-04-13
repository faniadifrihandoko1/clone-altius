import { z } from "zod";

export const accessForm = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
  description: z.string().nullable(),
});

export type AccessForm = z.infer<typeof accessForm>;

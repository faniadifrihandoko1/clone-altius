import { z } from "zod";

export const departemenSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type departemenFormValues = z.infer<typeof departemenSchema>;

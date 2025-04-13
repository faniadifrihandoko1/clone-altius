import { z } from "zod";

export const divisiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type divisiFormValues = z.infer<typeof divisiSchema>;

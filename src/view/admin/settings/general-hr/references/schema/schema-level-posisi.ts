import { z } from "zod";

export const levelPosisiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type levelPosisiFormValues = z.infer<typeof levelPosisiSchema>;

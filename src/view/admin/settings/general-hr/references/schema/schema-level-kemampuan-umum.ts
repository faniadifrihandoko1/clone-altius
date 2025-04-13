import { z } from "zod";

export const levelKemampuanUmumSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type levelKemampuanUmumFormValues = z.infer<typeof levelKemampuanUmumSchema>;

import { z } from "zod";

export const jenisCutiSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
  kuota: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().nullable()
  ),
});

export type jenisCutiFormValues = z.infer<typeof jenisCutiSchema>;

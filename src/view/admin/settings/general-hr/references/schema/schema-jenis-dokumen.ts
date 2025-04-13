import { z } from "zod";

export const jenisDokumenSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type JenisDokumenFormValues = z.infer<typeof jenisDokumenSchema>;

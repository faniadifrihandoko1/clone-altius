import { z } from "zod";

export const statusPenangananKeluhanSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export type statusPenangananKeluhanFormValues = z.infer<
  typeof statusPenangananKeluhanSchema
>;

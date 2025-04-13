import { z } from "zod";

export const generalSchemaSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  abstract: z.string().min(1, { message: "Required" }),
  content: z.string().nullable(),
});

export type GeneralSchemaForm = z.infer<typeof generalSchemaSchema>;

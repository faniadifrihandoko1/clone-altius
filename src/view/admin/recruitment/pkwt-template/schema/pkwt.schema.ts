import { z } from "zod";

export const pkwtTemplateSchema = z.object({
  content: z.string().nullable(),
});

export type pkwtTemplateFormValues = z.infer<typeof pkwtTemplateSchema>;

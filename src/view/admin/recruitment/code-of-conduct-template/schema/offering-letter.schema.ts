import { z } from "zod";

export const conductTemplateSchema = z.object({
  content: z.string().nullable(),
});

export type conductTemplateFormValues = z.infer<typeof conductTemplateSchema>;

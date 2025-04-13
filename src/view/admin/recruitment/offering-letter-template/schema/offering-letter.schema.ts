import { z } from "zod";

export const offeringTemplateSchema = z.object({
  content: z.string().nullable(),
});

export type offeringTemplateFormValues = z.infer<typeof offeringTemplateSchema>;

import { z } from "zod";

export const LabelPositionSchema = z.object({
  typeLabel: z.string().min(1, { message: "Required" }),
  content: z.string().min(1, { message: "Required" }),
});

export type LabelPositionFormValues = z.infer<typeof LabelPositionSchema>;

import { z } from "zod";

export const PerformancePeriodSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  startDate: z.date().superRefine((data, context) => {
    if (!data) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
      });
    }
  }),
  endDate: z.date().superRefine((data, context) => {
    if (!data) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
      });
    }
  }),
  desc: z.string().nullable(),
});

export type PerformancePeriodFormValues = z.infer<
  typeof PerformancePeriodSchema
>;

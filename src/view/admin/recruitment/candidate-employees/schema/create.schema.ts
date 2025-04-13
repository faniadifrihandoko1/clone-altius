import { generalOptionSchema } from "@/schemas/general-option.schema";
import { z } from "zod";

export const jobRequestSchemas = z.object({
  candidatEmployee: generalOptionSchema.superRefine((data, context) => {
    if (!data) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Jabatan wajib di isi",
      });
    }
  }),

  identity: z.string().nullable(),
  address: z.string().nullable(),
  departemen: z.string().nullable(),
  forNeeds: z.string().nullable(),
  interviewer: generalOptionSchema,
  interviewDate: z.string().nullable(),
  interviewTo: z.string().nullable(),
  noteInterview: z.string().nullable(),
});

export type jobRequestFormValues = z.infer<typeof jobRequestSchemas>;

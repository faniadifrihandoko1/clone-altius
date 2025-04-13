import { generalOptionSchema } from "@/schemas/general-option.schema";
import { z } from "zod";

export const detailjobRequestSchemas = z.object({
  data: z.object({
    submissionDate: z.any().nullable(),
    submission: z.any().nullable(),
    departement: generalOptionSchema,
    position: generalOptionSchema,
    requestType: generalOptionSchema,
    maxAge: z.any().nullable(),
    minSalary: z.string().nullable(),
    maxSalary: z.string().nullable(),
    workExperience: z.string().nullable(),
    education: generalOptionSchema,
    gender: z.any().nullable(),
  }),
  reqruitment: z.string().nullable(),
  taskDuty: z.string().nullable(),
});

export type detailjobRequestFormValues = z.infer<
  typeof detailjobRequestSchemas
>;

import { generalOptionSchema } from "@/schemas/general-option.schema";
import { z } from "zod";

export const candidatEmployeeSchemas = z.object({
  data: z.object({
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    Email: z.string().nullable(),
    MobilePhoneNumber: z.string().nullable(),
    PlaceOfBirth: z.any().nullable(),
    BirthDate: z.any().nullable(),
    IdentityTypeId: generalOptionSchema,
    IdentityNumber: z.number().nullable(),
    TerminatedDate: z.any().nullable(),
    ReligionTypeId: generalOptionSchema,
    EmpBloodTypeId: generalOptionSchema,
    EmpMaritalStatusId: generalOptionSchema,
    Sex: z.any().nullable(),
    DepartementId: generalOptionSchema,
  }),
  Address: z.object({
    IdentityAddress: z.string().nullable(),
    HomeAddress: z.string().nullable(),
  }),
  Assessment: z.any().nullable(),
});

export type candidatEmployeeFormValues = z.infer<
  typeof candidatEmployeeSchemas
>;

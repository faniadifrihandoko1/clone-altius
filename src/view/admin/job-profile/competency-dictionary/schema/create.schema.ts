import { z } from "zod";

export const CompetencyDictionarySchema = z.object({
  Name: z.string().min(1, { message: "Required" }),
  Definition: z.string().min(1, { message: "Required" }),
});
export const ChildCompetencyDictionarySchema = z.object({
  KeyBehavior: z.string().min(1, { message: "Required" }),
  ProfLevel1: z.string().min(1, { message: "Required" }),
  ProfLevel2: z.string().min(1, { message: "Required" }),
  ProfLevel3: z.string().min(1, { message: "Required" }),
  ProfLevel4: z.string().min(1, { message: "Required" }),
  ProfLevel5: z.string().min(1, { message: "Required" }),
});

export type CompetencyDictionaryFormValues = z.infer<
  typeof CompetencyDictionarySchema
>;

export type ChildCompetencyDictionaryFormValues = z.infer<
  typeof ChildCompetencyDictionarySchema
>;

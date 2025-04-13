import { z } from "zod";

export const MasterDataPositionSchema = z.object({
  Name: z.string().min(1, { message: "Required" }),
  Weight: z.string().min(1, { message: "Required" }),
  IsAppraisal: z.boolean(),
});

export type MasterDataPositionFormValues = z.infer<
  typeof MasterDataPositionSchema
>;

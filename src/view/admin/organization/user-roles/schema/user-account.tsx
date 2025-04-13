import { z } from "zod";

export const userAccountSchema = z.object({
  email: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
  isExternal: z.boolean(),
});

export type UserAccountFormValues = z.infer<typeof userAccountSchema>;

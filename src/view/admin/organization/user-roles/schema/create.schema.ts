import { z } from "zod";

export const userRolesSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  description: z.string().nullable(),
  pages: z
    .object({
      id: z.number(),
      label: z.string(),
    })
    .nullable()
    .superRefine((data, context) => {
      if (!data) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Required",
        });
      }
    }),
  permissionAdmin: z.array(z.any()).optional(),
  permissionEmployee: z.array(z.any()).optional(),
});

export type UserRolesForm = z.infer<typeof userRolesSchema>;

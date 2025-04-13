import { string, z } from "zod";

export const EmployeePositionSchema = z
  .object({
    performancePeriod: z.string().nullable(),
    positionName: z.string().nullable(),

    employeeName: z
      .object({
        id: z.number(),
        label: string(),
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
  })
  .transform((data) => {
    const newData: any = data;

    if (data.employeeName) {
      newData.employeeName = data.employeeName.id;
    }

    return data;
  });

export type EmployeePositionFormValues = z.infer<typeof EmployeePositionSchema>;

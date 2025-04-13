import { string, z } from "zod";

export const WorkUnitSchema = z
  .object({
    unitName: z.string().min(1, { message: "Required" }),
    jobTittle: z.string().min(1, { message: "Required" }),
    setKPI: z.enum(["org-employee", "employee-only"], {
      message: "Required",
    }),
    division: z
      .object({
        id: z.number(),
        label: string(),
      })
      .nullable(),
    departement: z
      .object({
        id: z.number(),
        label: z.string(),
      })
      .nullable(),
    workUnitLevel: z
      .object({
        id: z.number(),
        label: z.string(),
      })
      .nullable(),
    positionLevel: z
      .object({
        id: z.number(),
        label: z.string(),
      })
      .nullable(),
    officeLocation: z
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
  })
  .transform((data) => {
    const newData: any = data;

    if (data.division) {
      newData.division = data.division.id;
    }

    if (data.officeLocation) {
      newData.officeLocation = data.officeLocation.id;
    }

    if (data.workUnitLevel) {
      newData.workUnitLevel = data.workUnitLevel.id;
    }

    if (data.positionLevel) {
      newData.positionLevel = data.positionLevel.id;
    }

    if (data.departement) {
      newData.departement = data.departement.id;
    }

    return data;
  });

export type WorkUnitFormValues = z.infer<typeof WorkUnitSchema>;

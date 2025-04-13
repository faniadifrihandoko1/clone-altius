import { z } from "zod";

export const AccessScorecardSchemas = z
  .object({
    periode: z
      .object({
        id: z.string(),
        label: z.string(),
      })
      .nullable(),

    start_date: z.any().optional(),
    end_date: z.any().optional(),
  })
  .transform((data) => {
    const newData: any = data;

    if (data.periode) {
      newData.periode = data.periode.id;
    }

    return data;
  });

export type accessScorecardFilter = z.infer<typeof AccessScorecardSchemas>;

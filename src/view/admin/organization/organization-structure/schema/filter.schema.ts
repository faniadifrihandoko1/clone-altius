import { z } from "zod";

export const OrgStructureSchemas = z
  .object({
    periode: z
      .object({
        id: z.string(),
        label: z.string(),
      })
      .nullable(),
  })
  .transform((data) => {
    const newData: any = data;

    if (data.periode) {
      newData.periode = data.periode.id;
    }

    return data;
  });

export type orgStructureFilterForm = z.infer<typeof OrgStructureSchemas>;

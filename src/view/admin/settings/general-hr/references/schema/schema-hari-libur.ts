import dayjs from "dayjs";
import { z } from "zod";

export const hariLiburSchema = z
  .object({
    name: z.string().min(1, { message: "Nama harus diisi" }),
    date: z.date().superRefine((data, context) => {
      if (!data) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Transaction date wajib diisi",
        });
      }
    }),
    isCutiBersama: z.boolean().default(false),
  })
  .transform((data) => {
    const newData: any = data;

    if (data.date) {
      newData.date = dayjs(data.date).format("YYYY-MM-DD");
    }

    return newData;
  });

export type HariLiburFormValues = z.infer<typeof hariLiburSchema>;

import { generalOptionSchema } from "@/schemas/general-option.schema";
import { z } from "zod";

export const jenisLemburSchemas = z
  .object({
    jabatan: generalOptionSchema.superRefine((data, context) => {
      if (!data) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Jabatan wajib di isi",
        });
      }
    }),

    from_salary: z.preprocess(
      (val) => (typeof val === "string" ? Number(val) : val),
      z.number().nullable()
    ),
    to_salary: z.preprocess(
      (val) => (typeof val === "string" ? Number(val) : val),
      z.number().nullable()
    ),
    value: z.preprocess(
      (val) => (typeof val === "string" ? Number(val) : val),
      z.number().nullable()
    ),
  })
  .transform((data) => {
    const newData: any = data;

    if (data.jabatan) {
      newData.jabatan = data.jabatan.id;
    }

    return data;
  });

export const nestedJenisLemburSchemas = z.object({
  start_minute: z
    .preprocess(
      (val) => (typeof val === "string" ? Number(val) : val),
      z.number().nullable()
    )
    .superRefine((data, context) => {
      if (!data || data === 0) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Menit Mulai wajib diisi",
        });
      }
    }),
  end_minute: z
    .preprocess(
      (val) => (typeof val === "string" ? Number(val) : val),
      z.number().nullable()
    )
    .superRefine((data, context) => {
      if (!data || data === 0) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Menit Selesai wajib diisi",
        });
      }
    }),
  value: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().nullable()
  ),
  keterangan: z.string().nullable(),
});

export type jenisLemburFormValues = z.infer<typeof jenisLemburSchemas>;
export type nestedJenisLemburFormValue = z.infer<
  typeof nestedJenisLemburSchemas
>;

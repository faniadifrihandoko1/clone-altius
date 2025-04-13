import { z } from "zod";

export const lokasiKantorSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
  jarak: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1, { message: "Jarak harus diisi" })
  ),
  timezone: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1, { message: "Timezone harus diisi" })
  ),
  latitude: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1, { message: "Latitude harus diisi" })
  ),
  longitude: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(1, { message: "Longitude harus diisi" })
  ),
});

export type LokasiKantorFormValues = z.infer<typeof lokasiKantorSchema>;

import { z } from "zod";

export const statusKepegawaianSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const hubunganKerabatSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const jenjangPendidikanSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const alasanBerhentiKerjaSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const levelUnitKerjaSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const tipeIdentitasSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }),
});

export const agamaSchema = z.object({
    name: z.string().min(1, { message: 'Nama harus diisi' }),
})

export type StatusKepegawaianFormValues = z.infer<typeof statusKepegawaianSchema>;
export type HubunganKerabatFormValues = z.infer<typeof hubunganKerabatSchema>;
export type JenjangPendidikanFormValues = z.infer<typeof jenjangPendidikanSchema>;
export type AlasanBerhentiKerjaFormValues = z.infer<typeof alasanBerhentiKerjaSchema>;
export type LevelUnitKerjaFormValues = z.infer<typeof levelUnitKerjaSchema>;
export type TipeIdentitasFormValues = z.infer<typeof tipeIdentitasSchema>;
export type AgamaFormValues = z.infer<typeof agamaSchema>;

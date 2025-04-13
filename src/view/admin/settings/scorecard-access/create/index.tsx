"use client";

import CardBodyCustom from "@/components/comon/custom-table/body";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { accessForm, AccessForm } from "../schema/create.schema";
import TreeTableView from "./table";

export const CreateAccessScorecardView = () => {
  // const router = useRouter();

  const handleBack = () => {
    // router.push("/pengaturan/access-scorecard-organisasi");
  };
  const accessScorecardForm = useForm<AccessForm>({
    defaultValues: {
      name: "",

      description: null,
    },
    resolver: zodResolver(accessForm),
  });

  const { control } = accessScorecardForm;

  return (
    <CardBodyCustom title="Tambah Hak Akses ke Scorecard Kinerja Organisasi">
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CustomTextField<AccessForm>
          control={control}
          name="name"
          label="Nama"
          required
        />
        <CustomTextField<AccessForm>
          control={control}
          name="description"
          label="Deskripsi"
          multiline
          rows={2}
        />
      </Box>
      <Box
        sx={{ mt: 0, p: 2, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <h3 style={{ fontWeight: "bold" }}>
          Hak Akses ke Scorecard Kinerja Organisasi
        </h3>
        <TreeTableView />
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={handleBack} variant="outlined">
            Batal
          </Button>
          <Button variant="contained" sx={{ color: "white" }}>
            Simpan
          </Button>
        </Box>
      </Box>
    </CardBodyCustom>
  );
};

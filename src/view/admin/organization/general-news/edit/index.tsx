"use client";

import CardBodyCustom from "@/components/comon/custom-table/body";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
import JoditEditor from "jodit-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  GeneralSchemaForm,
  generalSchemaSchema,
} from "../schema/create.schema";

export const EditGeneralNewsView = () => {
  const editor = useRef(null);
  const t = useTranslations("organization.general-news.edit");

  const userRolesForm = useForm<GeneralSchemaForm>({
    defaultValues: {
      title: "",
      abstract: "",
      content: "",
    },
    resolver: zodResolver(generalSchemaSchema),
  });

  const { control, handleSubmit, setValue, watch } = userRolesForm;

  console.log("watch", watch("content"));

  const handleBack = () => {
    // router.push("/pengaturan/access-scorecard-organisasi");
  };

  const onSubmit = async (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <CardBodyCustom title={t("title")}>
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CustomTextField
          control={control}
          name="title"
          label={t("form.title")}
          required
        />
        <CustomTextField
          control={control}
          name="abstract"
          label={t("form.abstract")}
          required
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {/* Label */}
              <Typography fontWeight={600}>{t("form.content")}</Typography>
              {/* Input Field */}
              <JoditEditor
                ref={editor}
                value={field.value || ""}
                onBlur={(newContent) => setValue("content", newContent)}
                config={{
                  uploader: {
                    insertImageAsBase64URI: true,
                  },
                  minHeight: 250,
                }}
              />
            </Box>
          )}
        />
      </Box>

      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={handleBack} variant="outlined">
            Batal
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white" }}
            onClick={handleSubmit(onSubmit)}
          >
            Simpan
          </Button>
        </Box>
      </Box>
    </CardBodyCustom>
  );
};

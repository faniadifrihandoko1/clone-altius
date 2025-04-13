"use client";
import CardBodyCustom from "@/components/comon/custom-table/body";
import { editorConfig } from "@/utils/config/text-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress } from "@mui/material";
import JoditEditor from "jodit-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  pkwtTemplateFormValues,
  pkwtTemplateSchema,
} from "./schema/pkwt.schema";

export const PkwtTemplateView = () => {
  const editor = useRef(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("recruitment.pkwt-template");
  const pkwtTemplateForm = useForm<pkwtTemplateFormValues>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(pkwtTemplateSchema),
  });

  const { control, handleSubmit, reset, setValue } = pkwtTemplateForm;

  const onSubmit = async (data: pkwtTemplateFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Data:", data);
      await new Promise((res) => setTimeout(res, 1000));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (newContent: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setValue("content", newContent);
    }, 500);
  };

  return (
    <CardBodyCustom
      title={t("card.title")}
      showButton
      buttonElement={
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={() => reset()}
            variant="outlined"
            sx={{ minWidth: 120 }}
            disabled={isSubmitting}
          >
            Reset
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            sx={{ minWidth: 120, color: "white" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Simpan"
            )}
          </Button>
        </Box>
      }
    >
      <Box sx={{ width: "100%", my: 2 }}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <JoditEditor
              ref={editor}
              value={field.value || ""}
              config={editorConfig}
              onChange={handleChange}
            />
          )}
        />
      </Box>
    </CardBodyCustom>
  );
};

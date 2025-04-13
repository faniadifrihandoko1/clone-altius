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
  offeringTemplateFormValues,
  offeringTemplateSchema,
} from "./schema/offering-letter.schema";

export const OfferingLetterTemplateView = () => {
  const editor = useRef(null);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("recruitment.offering-letter-template");
  const offeringTemplateForm = useForm<offeringTemplateFormValues>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(offeringTemplateSchema),
  });

  const { control, handleSubmit, setValue } = offeringTemplateForm;

  const onSubmit = async (data: offeringTemplateFormValues) => {
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
            onClick={handleSubmit(onSubmit)}
            variant="outlined"
            sx={{ minWidth: 120 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Reset"
            )}
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
      <Box
        sx={{
          width: "100%",
          mt: 2,
        }}
      >
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <JoditEditor
                ref={editor}
                value={field.value || ""}
                config={editorConfig}
                onChange={handleChange}
              />
            </Box>
          )}
        />
      </Box>
    </CardBodyCustom>
  );
};

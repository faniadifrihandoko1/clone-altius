"use client";
import ToolbarSectionTableCustom from "@/components/comon/custom-table/toolbar";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ListUserRole } from "./list";

export const TableUserRole = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("comon.modal.add");

  // const locale = useLocale()

  const handleAdd = () => {
    router.push(`${pathname}/create`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ToolbarSectionTableCustom
        toggleAdd={handleAdd}
        sizeButtonAdd="medium"
        addButtonLabel={t("button.title")}
        disabledFilter
        disabledSearch
      />
      <ListUserRole />
      {/* {openAdd && <ModalAddAgama open={openAdd} toggle={toggleAdd} />} */}
    </Box>
  );
};

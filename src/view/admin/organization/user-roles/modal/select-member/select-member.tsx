"use client";

import { CustomStyledModal } from "@/components/comon/custom-modal";
import { SelectMembers, UserSelect } from "@/components/comon/select-member";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
const initialNonMembers: UserSelect[] = [
  {
    UserAccountId: 1002340,
    EmployeeFullName: "Andi Wirajaya",
  },
  {
    UserAccountId: 1263,
    EmployeeFullName: "Bima Abdulah",
  },
  {
    UserAccountId: 1264,
    EmployeeFullName: "Dendi Maulana",
  },
  {
    UserAccountId: 1001538,
    EmployeeFullName: "Eva Susanti",
  },
  {
    UserAccountId: 1002855,
    EmployeeFullName: "Gavin Hendrawan",
  },
  {
    UserAccountId: 1002551,
    EmployeeFullName: "Indri Astuti",
  },
  {
    UserAccountId: 1002481,
    EmployeeFullName: "Iwan Sumpena",
  },
  {
    UserAccountId: 1002805,
    EmployeeFullName: "Jefri Junaidi",
  },
  {
    UserAccountId: 1265,
    EmployeeFullName: "Lutfi Juna",
  },
  {
    UserAccountId: 1001686,
    EmployeeFullName: "Sandro Ardian",
  },
];

const initialMembers: UserSelect[] = [
  {
    UserAccountId: 1261,
    EmployeeFullName: "Angga Wijaya",
  },
  {
    UserAccountId: 1262,
    EmployeeFullName: "Desi Sawitri",
  },
];

export const SelectMember = ({
  openDialog,
  toggleDialog,
}: {
  openDialog: boolean;
  toggleDialog: () => void;
}) => {
  const [nonMembers, setNonMembers] = useState<UserSelect[]>(initialNonMembers);
  const [members, setMembers] = useState<UserSelect[]>(initialMembers);

  const t = useTranslations("organization.user-roles.modal.select");

  return (
    <CustomStyledModal
      open={openDialog}
      title={t("title")}
      subtitle={""}
      toggle={toggleDialog}
      maxWidth="sm"
      buttonOkProps={{
        children: "Simpan",
        onClick: () => toggleDialog(),
      }}
      buttonCancelProps={{
        children: "Batal",
        onClick: () => toggleDialog(),
      }}
    >
      <Stack spacing={3}>
        <Typography fontSize={16}>
          {t.rich("subtitle", {
            b: (chunks) => <b>{chunks}</b>,
          })}
        </Typography>

        <SelectMembers
          members={members}
          setMembers={setMembers}
          nonMembers={nonMembers}
          setNonMembers={setNonMembers}
        />
      </Stack>
    </CustomStyledModal>
  );
};

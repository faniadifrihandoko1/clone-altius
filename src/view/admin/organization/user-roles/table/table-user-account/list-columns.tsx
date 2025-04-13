"use client";
import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ListOptions } from "./list-options";

export function useTableColumns() {
  const t = useTranslations("organization.user-roles.tables.userAccount");
  const tableHead = t.raw("tableHead");

  return useMemo(() => {
    if (!Array.isArray(tableHead)) {
      console.warn("Table head not found for module: User Role");
      return [];
    }

    const columns: GridColDef[] = [
      {
        field: tableHead[0]?.nameField,
        headerName: tableHead[0]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        editable: true,
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[1]?.nameField,
        headerName: tableHead[1]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        editable: true,
        align: "center",
        headerAlign: "center",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      },
      {
        field: tableHead[2]?.nameField,
        headerName: tableHead[2]?.title,
        flex: 0.25, // 75% dari total lebar tabel
        editable: true,
        align: "center",
        headerAlign: "center",
        display: "flex",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: (params) => {
          return <Typography>{params.value ? "Ya" : "Tidak"}</Typography>;
        },
      },

      {
        field: tableHead[3]?.nameField,
        headerName: tableHead[3]?.title,
        flex: 0.25, // 25% dari total lebar tabel
        sortable: false,
        filterable: false,
        editable: false,
        hideable: false,
        align: "center",
        headerAlign: "center",
        display: "flex",
        renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
        renderCell: ({ row }) => <ListOptions data={row} />,
      },
    ];

    return columns;
  }, [tableHead]);
}

export const rows = [
  {
    Id: 1261,
    Email: "admin@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEG5+aaUUQjkOLNvnOjseb086BKg4A/OubJ5jD/zdQVWzngv3vMeuYbTNNVPVqtTjzg==",
    UserName: "admin@altius-demo.com",
    NewPassword: null,
    EncrPass: "lJlsx+fHTtlsar+4tyZ6Kamcw6IyIh/5FN+mw50e/Rc=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Angga Wijaya",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1003756,
    Email: "admin1@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEFPUABeUsyLV9ZUNRNXNaoIW9xb3RKgozhhHYfCIIXZGdGcrsHYlwM01xjC9NBbo7g==",
    UserName: "admin1@altius-demo.com",
    NewPassword: null,
    EncrPass: "FGYtJwXzuKBwhvp0Y2yZ7PFMB8ssYrgq+svPwrO8VhM=",
    CustomerId: "1212",
    BelongToSystem: true,
    IsExternal: false,
    LinkedtoEmployee: "",
    ShowEditButton: false,
    ShowDeleteButton: false,
  },
  {
    Id: 1002340,
    Email: "Andi@mail.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEPPxDJz8oqt3pE/w5xl6P9bASa+PzA15y/7NA+x5TaCWAO936VeYZIZHZXJSDdW/0w==",
    UserName: "Andi@mail.com",
    NewPassword: null,
    EncrPass: "MdS3TFwDnmdsIre4xTwfbx9isOXdRSZSTUyA5rDSYlU=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Andi Wirajaya",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1263,
    Email: "bima@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAECxTbnKHHZXTKEaClPpqvZlS1e6gj38XqQkr8ezYylhfD+4Kw+rwOUbZ16P0LIbNgw==",
    UserName: "bima@altius-demo.com",
    NewPassword: null,
    EncrPass: "xYvDZAeAEdAEz3qpPq0q79pEwS66p82t6xt6QpsO3zY=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Bima Abdulah",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1264,
    Email: "dendi@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAELgaqtnMZQTouwHO6b4hUe+EdQ2C4Hma4Q0DbRxX/HJ3e7YBERfffljg0czGW4xXzg==",
    UserName: "dendi@altius-demo.com",
    NewPassword: null,
    EncrPass: "aL/5JaAHmt1Q2hCdQlwQ31Qd09GkkG0ugG2ZaEOFLQU=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Dendi Maulana",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1262,
    Email: "desi@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEPk/TL3ImgZq33gYPZ5SveN3ddUOjLsL+icLIjY6eG5ucze1ND7SZ8YFh+hR74z7eQ==",
    UserName: "desi@altius-demo.com",
    NewPassword: null,
    EncrPass: "Ufy7tXP2bkJLEfZBF2ndvo2usesoTSMU9UHbdVB+Cqg=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Desi Sawitri",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1001538,
    Email: "eva@demo-altius.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEGJ3c58Z3vWljN9gSu/LNlqNii/4HiLPfbM4vhNAvNznpaKguhN67ZeqxThpmKoLWg==",
    UserName: "eva@demo-altius.com",
    NewPassword: null,
    EncrPass: "4hle3o5u8WYvP9Vzowct7RuAHKw3rwmYmcDvDEOkiCQ=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Eva Susanti",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1002853,
    Email: "external1@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEBwOf/0ctHBqEGTkIzcmr0rnSeyLwht4Tj5XSj+aGcNbeje7Y2SDSBEJ8LrypVHbbA==",
    UserName: "external1@altius-demo.com",
    NewPassword: null,
    EncrPass: "DX0+/yRJpVZbPLbXnaP/3K54FthDxeuBgA70ltcBPBI=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: true,
    LinkedtoEmployee: "",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1002858,
    Email: "external2@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEONSzfKosjM4KUy4MyTLcBf1C9GZqzEfJwn7hYZyf0Vosb/EqfU1MpTtrpk+u+hV0g==",
    UserName: "external2@altius-demo.com",
    NewPassword: null,
    EncrPass: "etFj4ugQtA+VVtNcFnpTUYUsgkeiX97wjct8MVbgyKs=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: true,
    LinkedtoEmployee: "",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
  {
    Id: 1002855,
    Email: "gavin@altius-demo.com",
    PasswordHash:
      "AQAAAAEAACcQAAAAEA37lgef2+JEP3kPeq1nVDf5OVVkFYEzvLnp7+L+YUEJMNvNE93urDBPA+qEUwpAvQ==",
    UserName: "gavin@altius-demo.com",
    NewPassword: null,
    EncrPass: "APyw6HD+Ze20LdWLbS5fiuPZ3t22k9OckDndv3ZXRF4=",
    CustomerId: "1212",
    BelongToSystem: false,
    IsExternal: false,
    LinkedtoEmployee: "Gavin Hendrawan",
    ShowEditButton: true,
    ShowDeleteButton: true,
  },
];

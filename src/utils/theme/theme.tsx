"use client";
import { alpha, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { colors } from "../constans/colors";

export const useIsDarkMode = () => {
  return false;
};

declare module "@mui/material/styles" {
  interface PaletteOptions {
    icons?: {
      select?: string;
      add?: string;
      sort?: string;
      employee?: string;
      position?: string;
      delete?: string;
      edit?: string;
      label?: string;
      detail?: string;
    };
    mainColor?: string;
    fontColor?: string; // ✅ Tambahkan `mainColor` agar tidak error
  }

  // Extend juga Palette agar theme.palette.icons bisa digunakan tanpa undefined
  interface Palette {
    icons: {
      select: string;
      add: string;
      sort: string;
      employee: string;
      position: string;
      delete: string;
      edit: string;
      label: string;
      detail: string;
    };
    mainColor: string;
    fontColor: string;
  }
}

export const useGetTheme = () => {
  const isDarkMode = useIsDarkMode();

  const primary = colors.green[1000]; // Hijau untuk Primary
  const select = "#00897B"; // Teal untuk Select
  const add = colors.green[1000]; //"#2E7D32"; // Hijau untuk Tambah Unit Kerja
  const sort = "#0277BD"; // Biru untuk Sort
  const employee = "#6A1B9A"; // Ungu untuk Pegawai
  const position = "#F9A825"; // Kuning untuk Label Jabatan
  const deleteColor = "#D32F2F"; // Merah untuk Delete
  const edit = "#1976D2"; // Oranye untuk Edit
  const label = "#F9A825";
  const error = "#ff3a6e";
  const detail = "#1565C0";
  const backgroundColor = isDarkMode ? "#121212" : "#FFFFFF";
  const borderRadius = 4;
  const fontColor = isDarkMode ? "#F4F5FA" : "#474955";
  const fontDark = isDarkMode ? "#474955" : primary;

  const useTheme = useMemo(
    () =>
      createTheme({
        isDarkMode,

        shape: {
          borderRadius,
        },

        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: { main: primary },
          error: { main: error },
          success: { main: "#6fd943" },
          secondary: { main: "#808080" },
          warning: { main: colors.yellow[400] },
          info: { main: colors.blue[300] },
          background: { default: backgroundColor, paper: backgroundColor },

          icons: {
            select,
            add,
            sort,
            employee,
            position,
            delete: deleteColor,
            edit,
            label,
            detail,
          },

          mainColor: isDarkMode ? alpha(primary, 0.175) : colors.slate[100],

          fontColor,

          text: {
            primary: fontColor,
            secondary: fontDark,
          },
        },

        typography: {
          fontSize: 12,

          // fontWeightRegular: 500,

          allVariants: {
            // fontFamily: '"Inter", sans-serif',
            // fontFamily: '"Poppins", sans-serif',

            // fontFamily: '"Source Sans 3", sans-serif',
            color: fontColor,
          },
        },

        // mixins: {

        // },

        components: {
          // MuiCssBaseline: {
          //   styleOverrides: {
          //     body: {
          //       scrollbarWidth: "thin", // Firefox
          //       scrollbarColor: "#c1c1c1 transparent", // Firefox
          //       "&::-webkit-scrollbar": {
          //         width: "3px",
          //         height: "3px",
          //       },
          //       "&::-webkit-scrollbar-thumb": {
          //         backgroundColor: "#c1c1c1",
          //         borderRadius: "4px",
          //       },
          //       "&::-webkit-scrollbar-thumb:hover": {
          //         backgroundColor: "#a8a8a8",
          //       },
          //       "&::-webkit-scrollbar-track": {
          //         backgroundColor: "transparent",
          //       },
          //     },
          //     "*": {
          //       scrollbarWidth: "thin",
          //       scrollbarColor: "#c1c1c1 transparent",
          //       "&::-webkit-scrollbar": {
          //         width: "3px",
          //         height: "3px",
          //       },
          //       "&::-webkit-scrollbar-thumb": {
          //         backgroundColor: "#c1c1c1",
          //         borderRadius: "4px",
          //       },
          //       "&::-webkit-scrollbar-thumb:hover": {
          //         backgroundColor: "#a8a8a8",
          //       },
          //       "&::-webkit-scrollbar-track": {
          //         backgroundColor: "transparent",
          //       },
          //     },
          //   },
          // },
          MuiDataGrid: {
            styleOverrides: {
              root: {
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#f3f4f6", // Warna header
                  fontWeight: 500,
                  fontSize: 12,
                },
                "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
                  padding: "0px 15px",
                },
                "& .MuiDataGrid-cell": {
                  fontSize: 12,
                  fontWeight: 400,
                },
                "& .MuiDataGrid-row:nth-of-type(even)": {
                  backgroundColor: "#f9fafb",
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                },

                "& .MuiDataGrid-row:nth-of-type(odd)": {
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                },
              },
            },
          },
          MuiTableHead: {
            styleOverrides: {
              root: {
                "& .MuiTableCell-root": {
                  color: alpha("#000000", 0.87),
                  backgroundColor: "#f3f4f6",
                },
              },
            },
          },
          MuiTableBody: {
            styleOverrides: {
              root: {
                "& .MuiTableRow-root:nth-of-type(even)": {
                  backgroundColor: "#f9fafb",
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                },
                "& .MuiTableRow-root:nth-of-type(odd)": {
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                },
              },
            },
          },
          MuiTableContainer: {
            styleOverrides: {
              root: {
                border: "1px solid #e5e7eb", // Border hanya di luar
                borderRadius: "5px", // Rounded corners
                overflow: "hidden", // Agar border-radius tidak terpotong
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              // root: {
              //   paddingLeft: 0,
              //   fontSize: 13,
              // },
              head: {
                fontWeight: 600,
              },
            },
          },

          MuiTextField: {
            styleOverrides: {
              root: {
                fontWeight: 500,
              },
            },
            defaultProps: {
              fullWidth: true,
            },
          },

          MuiInputAdornment: {
            styleOverrides: {
              root: {
                "& .MuiTypography-root": {
                  color: alpha("#000000", 0.87),
                  backgroundColor: "#f3f4f6",
                },
              },
            },
          },

          MuiSelect: {
            defaultProps: {
              fullWidth: true,
              size: "small",
            },
          },

          MuiButton: {
            styleOverrides: {
              root: {
                // color: "white",
                fontWeight: 600,
                boxShadow: "none",
                textTransform: "none",
                ":hover": {
                  boxShadow: "none",
                },
              },
            },
          },

          MuiListItemIcon: {
            styleOverrides: {
              root: {
                minWidth: "38px",
                color: "rgba(0, 0, 0, 0.54)",
              },
            },
          },

          MuiListItem: {
            styleOverrides: {
              root: {
                borderRadius: borderRadius + "px",
              },
            },
          },

          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: borderRadius + "px",

                ":hover": {
                  boxShadow: "none",
                },

                "&.Mui-selected": {
                  backgroundColor: alpha(primary, 0.1),

                  "& .MuiButtonBase-root": {
                    color: primary,
                  },

                  "& .MuiTypography-root": {
                    color: primary,
                    fontWeight: 500,
                  },

                  "& .MuiSvgIcon-root": {
                    color: primary,
                  },
                },
              },
            },
          },

          MuiStepLabel: {
            styleOverrides: {
              root: {
                "& .MuiSvgIcon-root": {
                  width: "1.25em",
                  height: "1.25em",
                },
              },
              label: {
                fontSize: "0.85rem",
              },
            },
          },

          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: "none",
                backgroundImage: "none",
              },
            },
          },

          MuiTooltip: {
            defaultProps: {
              placement: "bottom",
              sx: {
                fontSize: "13px",
              },
            },
          },

          MuiButtonGroup: {
            styleOverrides: {
              root: {
                boxShadow: "none",
              },
            },
          },

          MuiCardContent: {
            styleOverrides: {
              root: {
                ":last-child": {
                  paddingBottom: "16px",
                },
              },
            },
          },

          MuiAutocomplete: {
            styleOverrides: {
              tag: ({ ownerState }) => ({
                ...(ownerState.size === "small" && {
                  height: "22px",
                }),
              }),
            },
          },
        },
      }),

    [isDarkMode, primary, backgroundColor, add, fontColor, fontDark]
  );

  return useTheme;
};

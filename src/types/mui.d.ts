import type {
  Palette as MuiPallete,
  PaletteOptions as MuiPalleteOptions,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material";

declare module "@mui/material" {
  interface ThemeOptions extends MuiThemeOptions {
    isDarkMode: boolean;
  }

  interface PaletteOptions extends MuiPalleteOptions {
    mainColor: string;
    fontColor: string;
  }

  interface Palette extends MuiPallete {
    mainColor: string;
    fontColor: string;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  // Deklarasi untuk MuiDataGrid
  interface Components {
    MuiDataGrid?: {
      defaultProps?: Components["MuiDataGrid"]["defaultProps"];
      styleOverrides?: Components["MuiDataGrid"]["styleOverrides"];
    };
  }
}

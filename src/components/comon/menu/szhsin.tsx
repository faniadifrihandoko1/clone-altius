import { styled } from "@mui/material/styles";

import {
  ControlledMenu,
  ControlledMenuProps as SzhsinMenuProps,
} from "@szhsin/react-menu";
import {
  menuItemSelector,
  menuSelector,
  submenuSelector,
} from "@szhsin/react-menu/style-utils";

export const SzhsinMenu = styled(ControlledMenu)<SzhsinMenuProps>(
  ({ theme: { palette, shape } }) => ({
    [menuSelector.name]: {
      borderRadius: `${5}px`,
      padding: "8px 10px 8px 14px",
      color: palette.text.primary,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      backgroundColor: palette.background.paper,
    },
    [menuItemSelector.name]: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      borderRadius: `${shape.borderRadius}px`,
      padding: "6px 14px",
      transition: "background-color 0.2s ease-in-out",
      cursor: "pointer",
    },
    [submenuSelector.name]: {},
  })
);

import logo from "@/images/logo-crop.png";
import miniLogo from "@/images/logo-min.png";
import { useApplicationSettings } from "@/services/use-layout";
import { NavbarItem } from "@/types/general-type";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Import icon
import { Box, Container, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { appBarHeight } from "..";
import ExpandedDrawer from "../drawer/drawer";
import { GenerateMiniListItem } from "../drawer/mini-drawer";

interface SidebarProps {
  drawerWidth: number;
  menuItems: NavbarItem[];
}

export const Sidebars = ({ drawerWidth, menuItems }: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const isExpandDrawer = useApplicationSettings(
    (state) => state.value.expandSidebar
  );

  const toggleExpandDrawer = useApplicationSettings(
    (state) => state.toggleExpandSidebar
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        transitionDuration={300}
        sx={({ breakpoints, palette }) => ({
          width: drawerWidth,
          flexShrink: 0,
          transition: "all .5s",
          overflow: "visible",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: palette.background.default,
            overflow: "visible", // Pastikan tombol tidak terpotong
          },
          [breakpoints.down("md")]: {
            display: "none",
          },
        })}
        className="shadow-md "
      >
        {/* HEADER LOGO */}
        <Box
          sx={{
            height: "100px",
            // backgroundColor: "#1ec0aa",
            borderBottom: "1px solid #ccc",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%", paddingX: 2 }}>
            {isExpandDrawer ? (
              <Image src={logo} alt="logo-altius" />
            ) : (
              <Image src={miniLogo} alt="logo-altius" height={70} />
            )}
          </Box>
          {/* TOGGLE ICON BUTTON */}
          <IconButton
            onClick={toggleExpandDrawer}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-15px", // Keluar setengah dari parent
              transform: "translateY(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: 1,
              width: "30px",
              height: "30px",
              zIndex: 1201,
              "&:hover": {
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            {isExpandDrawer ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>

        {/* SIDEBAR CONTENT */}
        {isExpandDrawer ? (
          <ExpandedDrawer
            items={menuItems}
            appBarHeight={appBarHeight}
            open={isExpandDrawer}
          />
        ) : (
          <GenerateMiniListItem items={menuItems} />
        )}

        {/* FOOTER */}
        <Container sx={{ position: "absolute", bottom: 10 }}>
          {isExpandDrawer && <Typography>Version : 1.0</Typography>}
        </Container>
      </Drawer>

      {/* DRAWER FOR MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "80%",
            paddingTop: appBarHeight + "px",
            borderRight: "none",
          },
        }}
      >
        <ExpandedDrawer
          items={menuItems}
          appBarHeight={appBarHeight}
          open={isExpandDrawer}
        />
      </Drawer>
    </>
  );
};

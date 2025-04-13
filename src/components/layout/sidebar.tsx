"use client";

import logo from "@/images/logo-crop.png";
import miniLogo from "@/images/logo-min.png";
import { useApplicationSettings } from "@/services/use-layout";
import { NavbarItem } from "@/types/general-type";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MenuItem,
  Sidebar as ProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import IconifyIcon from "../comon/icon";

interface SidebarProps {
  drawerWidth: string;
  menuItems: NavbarItem[];
}

export const Sidebar = ({ menuItems }: SidebarProps) => {
  const locale = useLocale();
  const pathname = usePathname();
  const {
    value: { expandSidebar },
    setExpandSidebar,
  } = useApplicationSettings();

  const isActive = (path: string) =>
    pathname === `/${locale}${path}` ||
    (path !== "/" && pathname.startsWith(`/${locale}${path}`));

  const renderIcon = (icon: string) => (
    <IconifyIcon icon={icon} width={20} height={20} />
  );

  const renderMenuItems = (items: NavbarItem[], isRoot = false) => {
    return items.map((item) => {
      const fullPath = `/${locale}${item.path}`;
      const active = isActive(item.path);
      const hasChildren = item.children && item.children?.length > 0;

      if (hasChildren) {
        return (
          <SubMenu
            key={item.idmenu}
            label={
              <Typography
                fontSize="14px"
                fontWeight={active ? 600 : 400}
                color={active ? "primary" : "inherit"}
              >
                {item.name}
              </Typography>
            }
            icon={isRoot ? renderIcon(item.icon || "") : undefined}
            active={active}
            rootStyles={{
              ".ps-menu-button": {
                padding: "5px 15px",
              },
            }}
          >
            {renderMenuItems(item.children!, false)}
          </SubMenu>
        );
      }

      return (
        <Link href={fullPath} passHref key={item.idmenu}>
          <MenuItem
            component="div"
            icon={isRoot ? renderIcon(item.icon || "") : undefined}
            active={active}
            rootStyles={{
              ".ps-menu-button": {
                padding: "5px 15px",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              },
            }}
          >
            <Typography
              fontSize="14px"
              fontWeight={active ? 600 : 400}
              color={active ? "primary" : "inherit"}
            >
              {item.name}
            </Typography>
          </MenuItem>
        </Link>
      );
    });
  };

  const handleToggle = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <ProSidebar
        collapsed={!expandSidebar}
        backgroundColor="white"
        breakPoint="md"
        rootStyles={{
          ".ps-sidebar-container": {
            border: "none",
          },
        }}
      >
        <Menu>
          {/* Header dengan logo dan toggle button */}
          <MenuItem
            onClick={handleToggle}
            style={{
              height: "64px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: expandSidebar ? "flex-start" : "center",
              gap: "10px",
            }}
            icon={
              !expandSidebar && (
                <img
                  src={miniLogo.src}
                  alt="Mini Logo"
                  style={{ width: "32px", height: "32px" }}
                />
              )
            }
          >
            {expandSidebar && (
              <>
                <IconButton size="small">
                  <MenuOutlinedIcon />
                </IconButton>
                <img
                  src={logo.src}
                  alt="Logo"
                  style={{ width: "120px", height: "auto" }}
                />
              </>
            )}
          </MenuItem>

          {/* Menu items */}
          {renderMenuItems(menuItems, true)}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

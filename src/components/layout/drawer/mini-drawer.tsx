"use client";

import Icon from "@/components/comon/icon";
import { SzhsinMenu } from "@/components/comon/menu/szhsin";
import { NavbarItem } from "@/types/general-type";
import { List, ListItemButton, Tooltip, Typography } from "@mui/material";
import { MenuItem, RectElement, SubMenu } from "@szhsin/react-menu";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, RefObject, useRef, useState } from "react";

interface GenerateListItemProps {
  items: NavbarItem[];
  locale?: string;
}

export const GenerateMiniListItem: FunctionComponent<GenerateListItemProps> = ({
  items,
}) => {
  return (
    <List
      disablePadding
      component="div"
      sx={() => ({
        paddingTop: "1rem",

        transition: "transform 0.3s ease-in-out",
        "&:enter": {
          transform: "translateX(-100%)",
        },
        "&:enter-active": {
          transform: "translateX(0)",
        },
      })}
    >
      {items?.map((item, index) => {
        return <NavbarButton {...item} key={index} />;
      })}
    </List>
  );
};

const NavbarButton = ({
  path,
  children = [],
  icon,
  name,
  locale,
}: NavbarItem) => {
  const { push } = useRouter();
  const currentPathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleNavigate = () => push(`/${locale}${path}`);
  const handleCloseMenu = () => setOpen(false);
  const handleOpenMenu = () => setOpen(true);
  const isAvailableChildren = children.length > 0;

  const getIsSelected = (path: string) => currentPathname === path;
  const someChildrenSelected = (children: NavbarItem[]) =>
    children.some((data) => data.path === currentPathname);

  return (
    <>
      <Tooltip
        placement="right"
        title={<Typography sx={{ color: "white" }}>{name}</Typography>}
        enterNextDelay={500}
      >
        <ListItemButton
          ref={ref}
          sx={{
            padding: "8px",
            textAlign: "center",
            width: "2.5rem",
            height: "2.5rem",
            margin: "auto",
          }}
          onClick={isAvailableChildren ? handleOpenMenu : handleNavigate}
          selected={getIsSelected(path) || someChildrenSelected(children || [])}
        >
          {icon && <Icon fontSize="1.4rem" icon={icon} />}
        </ListItemButton>
      </Tooltip>

      <SzhsinMenu
        transition
        direction="right"
        portal
        anchorRef={ref as RefObject<Element | RectElement>}
        state={open ? "open" : "closed"}
        onClose={handleCloseMenu}
      >
        {children.map((item, index) => {
          const { path, name, icon, children } = item;
          const handleNavigate = () => push(`/${locale}${path}`);

          if (children && children.length > 0) {
            return (
              <SubMenu
                key={index}
                label={
                  <>
                    <Icon fontSize="1.2rem" icon={icon || "default-icon"} />{" "}
                    {name}
                  </>
                }
              >
                {children.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} onClick={() => push(subItem.path)}>
                    <Icon
                      fontSize="1.2rem"
                      icon={subItem.icon || "default-icon"}
                    />{" "}
                    {subItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }

          return (
            <MenuItem key={index} onClick={handleNavigate}>
              <Icon fontSize="1.2rem" icon={icon || "default-icon"} /> {name}
            </MenuItem>
          );
        })}
      </SzhsinMenu>
    </>
  );
};

"use client";

import Icon from "@/components/comon/icon";
import { NavbarItem } from "@/types/general-type";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  Box,
  List,
  SxProps,
  Theme,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

interface Props {
  items: NavbarItem[];
  appBarHeight: number;
  openModalLockFeature?: boolean;
  setOpenModalLockFeature?: Dispatch<SetStateAction<boolean>>;
  isDemo?: boolean;
  handleLogout?: () => void;
  open: boolean;
}

const ExpandedDrawer = (props: Props) => {
  const {
    items = [],
    isDemo = false,
    openModalLockFeature = false,
    handleLogout = () => {},
    setOpenModalLockFeature = () => {},
  } = props;

  const [dropdown, setDropdown] = useState<string | null>(null);
  const [subDropdown, setSubDropdown] = useState<string | null>(null);

  // const router = useRouter();
  const theme = useTheme();
  const locale = useLocale();

  const t = useTranslations("comon");
  const menuJson = t.raw("menu");

  const pathnames = usePathname();

  const isSelectedItem = (pathname: string) => {
    const pathWithLocale = `/${locale}${pathname}`;
    const currentPath = pathnames;

    return (
      currentPath === pathWithLocale ||
      currentPath.startsWith(`${pathWithLocale}/`)
    );
  };

  const statusUser = true;

  const toggleModalLockFeature = () => {
    setOpenModalLockFeature(!openModalLockFeature);
  };

  const handleToggle = (
    name: string,
    isHaveChildren: boolean,
    isLockedForTrial: boolean
    // path: string
  ) => {
    if (Number(statusUser) === 3 && isLockedForTrial && !isHaveChildren) {
      toggleModalLockFeature();
    } else {
      setDropdown((prev) => (prev === name ? null : name));
    }
  };

  const handleSubToggle = (name: string) => {
    setSubDropdown((prev) => (prev === name ? null : name));
  };

  const dataMerged = menuJson
    .map((menuItem: NavbarItem) => {
      const serverItem = items.find((item) => item.idmenu === menuItem.idmenu);
      if (!serverItem) return null;

      return {
        ...serverItem,
        name: menuItem.name,
        children: menuItem.children
          ? menuItem.children
              .map((child) => {
                const serverChild = serverItem.children?.find(
                  (item) => item.idmenu === child.idmenu
                );
                if (!serverChild) return null;
                return {
                  ...serverChild,
                  name: child.name,
                };
              })
              .filter(Boolean)
          : [],
      };
    })
    .filter(Boolean);

  return (
    <Fragment>
      <Box
        sx={({ breakpoints }) => ({
          overflow: "auto",
          paddingX: 2,
          maxHeight: "82%",
          [breakpoints.up("md")]: {
            paddingX: 1,
          },
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
        })}
      >
        <List component="div">
          {dataMerged?.map(
            (
              {
                icon,
                path,
                name,
                is_locked_for_trial,
                children = [],
                key,
              }: any,
              index: number
            ) => {
              const isHaveChildren = children?.length > 0;
              const childrenIsSelected = children?.some(({ path }: any) =>
                isSelectedItem(path)
              );

              const isOpenDropdown = dropdown === name;

              const listSubIconButtonStyle: SxProps<Theme> = () => ({
                paddingLeft: 3,
                paddingRight: 1,
              });

              return (
                <Box key={index} className={`${key}`}>
                  <Tooltip
                    title={
                      <Typography style={{ color: "white" }}>{name}</Typography>
                    }
                    placement="right"
                    enterNextDelay={500}
                  >
                    {!isHaveChildren ? (
                      <Link href={`/${locale}${path}`} passHref legacyBehavior>
                        <ListItemButton
                          component="a"
                          onClick={() =>
                            handleToggle(
                              name,
                              isHaveChildren,
                              is_locked_for_trial
                              // path
                            )
                          }
                          selected={isSelectedItem(path) || childrenIsSelected}
                          sx={{
                            justifyContent: "initial",
                            width: "inherit",
                            height: "inherit",
                            mt: "3px",
                          }}
                          disabled={isHaveChildren || !isDemo ? false : true}
                          className="!px-3 !py-1 !flex !items-center"
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: 2,
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              fontSize="1.4rem"
                              icon={icon}
                              color={
                                isSelectedItem(path)
                                  ? theme.palette.primary.main
                                  : ""
                              }
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={name}
                            sx={{ display: "initial" }}
                            primaryTypographyProps={{ sx: { fontSize: 14 } }}
                          />
                        </ListItemButton>
                      </Link>
                    ) : (
                      <ListItemButton
                        onClick={() =>
                          handleToggle(
                            name,
                            isHaveChildren,
                            is_locked_for_trial
                            // path
                          )
                        }
                        selected={isSelectedItem(path) || childrenIsSelected}
                        sx={{
                          justifyContent: "initial",
                          width: "inherit",
                          height: "inherit",
                          mt: "3px",
                        }}
                        disabled={isHaveChildren || !isDemo ? false : true}
                        className="!px-3 !py-1 !flex !items-center"
                      >
                        <ListItemIcon
                          sx={{ minWidth: 0, mr: 2, justifyContent: "center" }}
                        >
                          <Icon
                            fontSize="1.4rem"
                            icon={icon}
                            color={
                              isSelectedItem(path)
                                ? theme.palette.primary.main
                                : ""
                            }
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={name}
                          sx={{ display: "initial" }}
                          primaryTypographyProps={{ sx: { fontSize: 14 } }}
                        />
                        {isHaveChildren &&
                          (isOpenDropdown ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                    )}
                  </Tooltip>

                  {isHaveChildren && (
                    <Collapse in={isOpenDropdown} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {children?.map(
                          (
                            {
                              path,
                              icon,
                              name: childrenTitle,
                              children: subChildren,
                            }: any,
                            index: number
                          ) => {
                            const isHaveSubChildren =
                              subChildren && subChildren?.length > 0;
                            const isOpenSubDropdown =
                              subDropdown === childrenTitle;

                            return (
                              <Fragment key={index}>
                                <Tooltip
                                  title={
                                    <Typography sx={{ color: "white" }}>
                                      {childrenTitle}
                                    </Typography>
                                  }
                                  placement="right"
                                  enterNextDelay={500}
                                >
                                  {!isHaveSubChildren ? (
                                    <Link
                                      href={`/${locale}${path}`}
                                      passHref
                                      legacyBehavior
                                    >
                                      <ListItemButton
                                        component="a"
                                        sx={listSubIconButtonStyle}
                                        onClick={() => {
                                          if (
                                            Number(statusUser) === 3 &&
                                            is_locked_for_trial
                                          ) {
                                            toggleModalLockFeature();
                                          }
                                        }}
                                        selected={isSelectedItem(path)}
                                        className="!py-1 !flex !items-center"
                                      >
                                        <ListItemIcon
                                          sx={{
                                            minWidth: 0,
                                            mr: 2,
                                            justifyContent: "center",
                                          }}
                                        >
                                          {isDemo ? (
                                            <Icon
                                              fontSize="1.2rem"
                                              icon="majesticons:lock-line"
                                            />
                                          ) : (
                                            <Icon
                                              fontSize="1.2rem"
                                              icon={icon}
                                              color={
                                                isSelectedItem(path)
                                                  ? theme.palette.primary.main
                                                  : ""
                                              }
                                            />
                                          )}
                                        </ListItemIcon>

                                        <ListItemText
                                          primary={childrenTitle}
                                          primaryTypographyProps={{
                                            sx: { fontSize: 13.5 },
                                          }}
                                        />

                                        {is_locked_for_trial &&
                                          Number(statusUser) === 3 && (
                                            <LockIcon
                                              sx={{ color: "orange" }}
                                            />
                                          )}
                                      </ListItemButton>
                                    </Link>
                                  ) : (
                                    <ListItemButton
                                      sx={listSubIconButtonStyle}
                                      onClick={() => {
                                        if (
                                          Number(statusUser) === 3 &&
                                          is_locked_for_trial
                                        ) {
                                          toggleModalLockFeature();
                                        } else if (isHaveSubChildren) {
                                          handleSubToggle(childrenTitle);
                                        }
                                      }}
                                      selected={isSelectedItem(path)}
                                      className="!py-1 !flex !items-center"
                                    >
                                      <ListItemIcon
                                        sx={{
                                          minWidth: 0,
                                          mr: 2,
                                          justifyContent: "center",
                                        }}
                                      >
                                        {isDemo ? (
                                          <Icon
                                            fontSize="1.2rem"
                                            icon="majesticons:lock-line"
                                          />
                                        ) : (
                                          <Icon
                                            fontSize="1.2rem"
                                            icon={icon}
                                            color={
                                              isSelectedItem(path)
                                                ? theme.palette.primary.main
                                                : ""
                                            }
                                          />
                                        )}
                                      </ListItemIcon>

                                      <ListItemText
                                        primary={childrenTitle}
                                        primaryTypographyProps={{
                                          sx: { fontSize: 13.5 },
                                        }}
                                      />

                                      {isHaveSubChildren &&
                                        (isOpenSubDropdown ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        ))}

                                      {is_locked_for_trial &&
                                        Number(statusUser) === 3 && (
                                          <LockIcon sx={{ color: "orange" }} />
                                        )}
                                    </ListItemButton>
                                  )}
                                </Tooltip>

                                {isHaveSubChildren && (
                                  <Collapse
                                    in={isOpenSubDropdown}
                                    timeout="auto"
                                    unmountOnExit
                                  >
                                    <List component="div" disablePadding>
                                      {subChildren?.map(
                                        (
                                          {
                                            path,
                                            icon,
                                            name: subChildrenTitle,
                                          }: any,
                                          index: number
                                        ) => (
                                          <Tooltip
                                            title={
                                              <Typography
                                                sx={{ color: "white" }}
                                              >
                                                {subChildrenTitle}
                                              </Typography>
                                            }
                                            placement="right"
                                            enterNextDelay={500}
                                            key={index}
                                          >
                                            <Link
                                              href={`/${locale}${path}`}
                                              passHref
                                              legacyBehavior
                                            >
                                              <ListItemButton
                                                component="a"
                                                sx={{ paddingLeft: 5 }}
                                                onClick={() => {
                                                  if (
                                                    Number(statusUser) === 3 &&
                                                    is_locked_for_trial
                                                  ) {
                                                    toggleModalLockFeature();
                                                  }
                                                }}
                                                selected={isSelectedItem(path)}
                                                disabled={isDemo}
                                                className="!py-1 !flex !items-center"
                                              >
                                                <ListItemIcon
                                                  sx={{
                                                    minWidth: 0,
                                                    mr: 2,
                                                    justifyContent: "center",
                                                  }}
                                                >
                                                  {isDemo ? (
                                                    <Icon
                                                      fontSize="1.2rem"
                                                      icon="majesticons:lock-line"
                                                    />
                                                  ) : (
                                                    <Icon
                                                      fontSize="1.2rem"
                                                      icon={icon}
                                                      color={
                                                        isSelectedItem(path)
                                                          ? theme.palette
                                                              .primary.main
                                                          : ""
                                                      }
                                                    />
                                                  )}
                                                </ListItemIcon>

                                                <ListItemText
                                                  primary={subChildrenTitle}
                                                  primaryTypographyProps={{
                                                    sx: { fontSize: 13 },
                                                  }}
                                                />

                                                {is_locked_for_trial &&
                                                  Number(statusUser) === 3 && (
                                                    <LockIcon
                                                      sx={{ color: "orange" }}
                                                    />
                                                  )}
                                              </ListItemButton>
                                            </Link>
                                          </Tooltip>
                                        )
                                      )}
                                    </List>
                                  </Collapse>
                                )}
                              </Fragment>
                            );
                          }
                        )}
                      </List>
                    </Collapse>
                  )}
                </Box>
              );
            }
          )}

          <Divider
            sx={({ breakpoints }) => ({
              marginY: 1,
              [breakpoints.up("md")]: {
                display: "none",
              },
            })}
          />

          <ListItem
            disablePadding
            sx={({ breakpoints }) => ({
              [breakpoints.up("md")]: {
                display: "none",
              },
            })}
          >
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>

              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
};

export default ExpandedDrawer;

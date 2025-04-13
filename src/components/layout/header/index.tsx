"use client";

import profile from "@/images/profile-male.png";
import {
  Box,
  Card,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  MdArrowDropDown,
  MdExitToApp,
  MdLock,
  MdOutlineEmail,
  MdPerson,
} from "react-icons/md";
import { appBarHeight } from "..";
import Icon from "../../comon/icon";

export const Header = ({}: { drawerWidth: string | number }) => {
  const locale = useLocale();
  const [isModalUser, setIsModalUser] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(locale);

  const pathname = usePathname();
  const router = useRouter();

  const handleLangModalToggle = () => {
    setIsLangModalOpen(!isLangModalOpen);
  };

  const handleLangClose = () => {
    setIsLangModalOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalUser(!isModalUser);
  };

  const handleClose = () => {
    setIsModalUser(false);
  };

  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <Box
      sx={({ breakpoints }) => ({
        width: `100%`,
        padding: "12px 0px",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [breakpoints.down("md")]: {
          width: "100vw",
          margin: "0px",
          borderRadius: "0px",
        },
      })}
    >
      <Toolbar
        sx={() => ({
          minHeight: appBarHeight + "px !important",
        })}
        className="flex justify-between gap-3 w-full"
      >
        <Box className="page-header flex gap-4    w-full items-center">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={({ breakpoints }) => ({
                width: `${30}px`,
                [breakpoints.down("md")]: {
                  display: "none",
                },
                mt: 0.5,
              })}
              className="flex items-center"
            ></Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                position: "relative",
              }}
            >
              <IconButton
                color="inherit"
                onClick={handleLangModalToggle}
                sx={{
                  position: "relative",
                  border: "1px solid #ccc",
                  // backgroundColor: "#f7f7f7",
                  borderRadius: 1,
                  padding: 0.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {
                    selectedLang === "id" ? (
                      <>
                        <Icon icon="openmoji:flag-indonesia" width={24} />
                        <Typography fontSize={12}>IDN</Typography>
                      </>
                    ) : selectedLang === "en" ? (
                      <>
                        <Icon icon="openmoji:flag-united-kingdom" width={24} />
                        <Typography fontSize={12}>EN</Typography>
                      </>
                    ) : null
                    // (
                    //   <>
                    //     <Icon icon="openmoji:flag-china" width={24} />
                    //     <Typography fontSize={12}>中文</Typography>
                    //   </>
                    // )
                  }
                  <MdArrowDropDown />
                </Box>
              </IconButton>

              {/* Modal Lang */}

              <Modal
                open={isLangModalOpen}
                onClose={handleLangClose}
                BackdropProps={{ invisible: true }}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  mt: 10.5,
                  mr: 35,
                }}
              >
                <Card
                  sx={{
                    minWidth: 140,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 1,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
                    {[
                      {
                        code: "id",
                        name: "Indonesia",
                        icon: "openmoji:flag-indonesia",
                      },
                      {
                        code: "en",
                        name: "English",
                        icon: "openmoji:flag-united-kingdom",
                      },
                      // { code: "zh", name: "中文", icon: "openmoji:flag-china" },
                    ].map((lang) => (
                      <Box
                        key={lang.code}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 1,
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "4px",
                          },
                        }}
                        onClick={() => {
                          setSelectedLang(lang.code);
                          handleLanguageChange(lang.code);
                          handleLangClose();
                        }}
                      >
                        <Icon icon={lang.icon} width={24} />
                        <Typography>{lang.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Modal>
              <IconButton color="inherit" sx={{ position: "relative" }}>
                <Card
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 18,
                    height: 18,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    fontSize: 12,
                  }}
                >
                  2
                </Card>
                <MdOutlineEmail size={22} />
              </IconButton>
              <IconButton
                onClick={handleModalToggle}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: "8px",
                  //
                }}
              >
                <Image
                  src={profile}
                  alt="User Profile"
                  height={35}
                  className="rounded-full"
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    Angga Wijaya
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Admin</Typography>
                </Box>
              </IconButton>

              <Modal
                open={isModalUser}
                onClose={handleClose}
                BackdropProps={{ invisible: true }}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  mt: 10.5,
                  mr: 3,
                }}
              >
                <Card
                  sx={{
                    minWidth: 200,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "4px",
                        },
                      }}
                    >
                      <MdPerson fontSize="small" />
                      <Typography>Profile</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "4px",
                        },
                      }}
                    >
                      <MdLock fontSize="small" />
                      <Typography>Ubah Password</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          borderRadius: "4px",
                        },
                      }}
                    >
                      <MdExitToApp fontSize="small" />
                      <Typography>Logout</Typography>
                    </Box>
                  </Box>
                </Card>
              </Modal>
            </Box>
          </Box>

          {/* <Box
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  display: "none",
                },
              })}
              className="flex items-center"
            >
              <IconButton onClick={handleDrawerToggle}>
                <MenuOutlined color="primary" />
              </IconButton>
            </Box> */}
        </Box>
      </Toolbar>
    </Box>
  );
};

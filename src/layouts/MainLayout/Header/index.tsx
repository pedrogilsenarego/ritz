import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Mobile from "../../../assets/mobile.png";
import { useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "../../../assets/Icon_Search.svg";
import Login from "../../../assets/Log_In.svg";
import DrawerMine from "../../../components/Drawer";
import { Icons } from "../../../components/Icons";

import BasicPopover from "../../../components/Popover";

import { MAX_SCREEN } from "../../../constants/screen";

import { ROUTE_PATHS } from "../../../routes/constants";
import { mainColors } from "../../../theme/theme";

import Cart from "./Cart";
import LoginPopoverContent from "./LoginPopoverContent";

import { options } from "./constants";

import "./index.css";

import useHeader from "./useHeader";
import MenuPopopverContent from "./MenuPopopverContent";

import useUser from "../../../hooks/useUser";
import { BASE_URL } from "../../../services/constants";
import { Lang } from "./Lang";
import UserPopoverContent from "../../User/UserMenu/UserPopoverContent";
import { devMode } from "../../../constants/devConfig";
import { VisitCard } from "../../../presentational/VisitCard";
import { i18n } from "../../../translations/i18n";

const Header = () => {
  const {
    cartDrawer,
    setCartDrawer,

    location,
  } = useHeader();
  const navigate = useNavigate();

  const userQuery = useUser();

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false);
  const [lapTopDrawer, setLaptopDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorElLogin, setAnchorElLogin] = useState<HTMLElement | null>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClickPopover = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      event.preventDefault();
      event.stopPropagation();
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClickPopoverLogin = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElLogin) {
      setAnchorElLogin(null);
    } else {
      setAnchorElLogin(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogin = () => {
    setAnchorElLogin(null);
  };

  const isOpen = Boolean(anchorEl);

  const isOpenLogin = Boolean(anchorElLogin);

  const handleLogin = (e: any) => {
    handleClickPopoverLogin(e);
  };

  const handleMenu = (e: any) => {
    setLaptopDrawer(true);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.min(1, Math.max(0, scrollPosition / 500));

  const backgroundColor = `rgba(224, 211, 193, ${0.8 - 0.3 * opacity})`;

  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const triggerScrollPosition = 0.85 * viewportHeight - 350;

  const isScrolled = scrollPosition < triggerScrollPosition;

  const renderLaptop = () => {
    return (
      <Box
        id="first-box"
        style={{
          padding: "0px 0px 15px 0px",
          backgroundColor,
          //marginTop: "20px",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Container
          style={{
            maxWidth: MAX_SCREEN,
            marginTop: "2vh",
            display: "flex",
            flexDirection: "column",
            padding: "0px 80px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                columnGap: "30px",
              }}
            >
              <Icons.Menu
                style={{
                  cursor: "pointer",

                  transition: "opacity ease-in-out 1s",
                }}
                size={"30px"}
                onClick={(e) => {
                  handleMenu(e);
                }}
              />
              {devMode && (
                <div>
                  <img
                    src={SearchIcon}
                    alt="logo"
                    style={{
                      width: "21px",
                      cursor: "pointer",
                      marginBottom: "-6px",
                    }}
                  />
                </div>
              )}
            </Grid>
            <Grid
              onClick={() => navigate(ROUTE_PATHS.HOME)}
              item
              xs={4}
              style={{
                display: "flex",
                zIndex: 1000,
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-7.webp`}
                alt="logo"
                style={{
                  objectFit: "contain",
                  width: "155px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                columnGap: "30px",
              }}
            >
              {!devMode && (
                <VisitCard
                  customButton={
                    <Button
                      sx={{
                        backgroundColor: "rgba(69, 69, 69, 1)",
                        padding: "8px 20px",

                        borderRadius: "30px",
                      }}
                    >
                      <Typography
                        style={{
                          color: "#FEFEFE",
                          textTransform: "uppercase",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "1px",
                          lineHeight: "14px",
                        }}
                      >
                        {i18n.t("footer.schedulle")}
                      </Typography>
                    </Button>
                  }
                />
              )}
              <div style={{ zIndex: 1000 }}>
                <Lang />
              </div>
              {devMode || location.pathname === "/admin" ? (
                <div>
                  {userQuery.data && !userQuery.isLoading ? (
                    <img
                      onClick={(e) => handleClickPopover(e)}
                      src={`${BASE_URL}${userQuery?.data?.Data?.imagem}`}
                      alt="logo"
                      style={{
                        width: "19px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <img
                      onClick={(e) => {
                        handleLogin(e);
                      }}
                      src={Login}
                      alt="logo"
                      style={{
                        width: "19px",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>

          <Container
            style={{
              display: "flex",
              maxWidth: 1200,
              width: "100%",
              padding: "0px 50px",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              opacity: isScrolled ? 1 : 0,
              marginTop: isScrolled ? "20px" : "-20px", // Adjust the marginTop based on the scroll position
              transition: "all 0.5s ease-in-out", // Add transition property
            }}
          >
            {options.map((option, index) => {
              return (
                <div key={index} style={{ flex: 1, textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      className={"text"}
                      style={{
                        cursor: !isScrolled ? undefined : "pointer",
                        fontSize: "14px",
                        fontWeight:
                          location.pathname === option.link ? 600 : 500,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                      key={option.name}
                      onClick={
                        !isScrolled ? () => null : () => navigate(option.link)
                      }
                    >
                      {option.name}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </Container>
        </Container>
        <BasicPopover
          isOpen={isOpenLogin}
          anchorEl={anchorElLogin}
          onClose={handleCloseLogin}
        >
          <LoginPopoverContent handleClose={handleCloseLogin} />
        </BasicPopover>
        <BasicPopover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
          <UserPopoverContent home handleClose={handleClose} />
        </BasicPopover>

        <DrawerMine
          fullHeight
          position="left"
          openDrawer={lapTopDrawer}
          setOpenDrawer={setLaptopDrawer}
        >
          <MenuPopopverContent handleClose={setLaptopDrawer} />
        </DrawerMine>
      </Box>
    );
  };

  const renderMobile = () => {
    return (
      <>
        <Box
          alignItems="center"
          style={{
            zIndex: 1000,
            position: "fixed",
            justifyContent: "space-between",
            padding: "15px 20px",
            display: mobileDrawer ? "none" : "flex",
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(220, 207, 190, 0.7) 0%, #DCCFBE 39.5%, #DCCFBE 61.5%, rgba(224, 211, 193, 0.7) 100%)",
          }}
        >
          <Box width={"15%"}>
            <VscMenu
              size="20px"
              color={mainColors.primary[400]}
              onClick={() => setMobileDrawer(true)}
            />
          </Box>
          <img
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-7.webp`}
            alt="logo"
            style={{
              width: "123px",
              cursor: "pointer",
            }}
          />
          {devMode ? (
            <img
              onClick={(e) => {
                handleLogin(e);
              }}
              src={Login}
              alt="logo"
              style={{
                width: "18px",
                cursor: "pointer",
              }}
            />
          ) : (
            <VisitCard
              customButton={
                <Button
                  sx={{
                    width: "15%",
                    backgroundColor: "rgba(69, 69, 69, 1)",
                    padding: "8px 0px",
                    borderRadius: "30px",
                  }}
                >
                  <img
                    src={Mobile}
                    alt=""
                    style={{ height: "15px", width: "15px" }}
                  />
                </Button>
              }
            />
          )}
        </Box>
        <DrawerMine
          clearBackground
          fullWidth
          fullHeight
          position="left"
          openDrawer={mobileDrawer}
          setOpenDrawer={setMobileDrawer}
        >
          <MenuPopopverContent handleClose={setMobileDrawer} />
        </DrawerMine>
        <DrawerMine
          fullHeight
          fullWidth
          position="left"
          openDrawer={cartDrawer}
          setOpenDrawer={setCartDrawer}
        >
          <Cart closeCart={setCartDrawer} />
        </DrawerMine>
        <BasicPopover
          isOpen={isOpenLogin}
          anchorEl={anchorElLogin}
          onClose={handleCloseLogin}
        >
          <LoginPopoverContent handleClose={handleCloseLogin} />
        </BasicPopover>
      </>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default Header;

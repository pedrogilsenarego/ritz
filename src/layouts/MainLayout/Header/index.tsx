import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../../../assets/EHTIQ_Logo.svg";
import LogoMobile from "../../../assets/ole.png";
import SearchIcon from "../../../assets/Icon_Search.svg";
import Login from "../../../assets/Log_In.svg";
import DrawerMine from "../../../components/Drawer";
import { Icons } from "../../../components/Icons";
import UncontrolledSelect from "../../../components/Inputs/UncontroledSelect";
import BasicPopover from "../../../components/Popover";
import Button from "../../../components/Ui/Button";
import { MAX_SCREEN } from "../../../constants/screen";
import { useSignOut } from "../../../hooks/useLogout";
import { State } from "../../../redux/types";
import { ROUTE_PATHS } from "../../../routes/constants";
import { Colors, mainColors } from "../../../theme/theme";

import Cart from "./Cart";
import LoginPopoverContent from "./LoginPopoverContent";
import UserPopoverContent from "./UserPopoverContent";
import { langOptions, options } from "./constants";

import "./index.css";
import useStyles from "./styles";
import useHeader from "./useHeader";
import MenuPopopverContent from "./MenuPopopverContent";
import useCookies from "../../../hooks/useCookies";
import useUser from "../../../hooks/useUser";
import { BASE_URL } from "../../../services/constants";
import { Lang } from "./Lang";

const Header = () => {
  const classes = useStyles();
  const {
    totalCartItems,
    cartDrawer,
    setCartDrawer,
    lang,
    changeLanguage,
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
  const [anchorElMenu, setAnchorElMenu] = useState<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { getCookie } = useCookies();
  const accessUser = getCookie("access");

  const handleClickPopoverLogin = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElLogin) {
      setAnchorElLogin(null);
    } else {
      setAnchorElLogin(event.currentTarget);
    }
  };

  const handleClickPopoverMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElMenu) {
      setAnchorElMenu(null);
    } else {
      setAnchorElMenu(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogin = () => {
    setAnchorElLogin(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const isOpen = Boolean(anchorEl);

  const isOpenLogin = Boolean(anchorElLogin);

  const isOpenMenu = Boolean(anchorElMenu);

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
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                onClick={() => navigate(ROUTE_PATHS.HOME)}
                src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-7.webp`}
                alt="logo"
                style={{
                  width: "155px",
                  cursor: "pointer",
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
              <Lang />
              <div>
                <img
                  onClick={
                    accessUser
                      ? () => navigate(ROUTE_PATHS.USER_HOME)
                      : (e) => {
                          handleLogin(e);
                        }
                  }
                  src={
                    userQuery?.data?.Data?.imagem
                      ? `${BASE_URL}${userQuery?.data?.Data?.imagem}`
                      : Login
                  }
                  alt="logo"
                  style={{
                    width: "19px",
                    cursor: "pointer",
                  }}
                />
              </div>
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
                <div key={index} style={{}}>
                  <Typography
                    className={"text"}
                    style={{
                      cursor: !isScrolled ? undefined : "pointer",
                      fontSize: "14px",
                      fontWeight: location.pathname === option.link ? 600 : 500,
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
          <UserPopoverContent handleClose={handleClose} />
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
          display="flex"
          alignItems="center"
          style={{
            zIndex: 1000,
            position: "fixed",
            justifyContent: "space-between",
            padding: "15px 35px",

            width: "100%",
            background:
              "linear-gradient(90deg, rgba(220, 207, 190, 0.7) 0%, #DCCFBE 39.5%, #DCCFBE 61.5%, rgba(224, 211, 193, 0.7) 100%)",
          }}
        >
          <VscMenu
            size="20px"
            color={mainColors.primary[400]}
            onClick={() => setMobileDrawer(true)}
          />
          <img
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            src={`${BASE_URL}/media/FOTOS-EHTIC-DESKTOP/LOGO-7.webp`}
            alt="logo"
            style={{
              width: "123px",
              cursor: "pointer",
            }}
          />
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
        </Box>
        <DrawerMine
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

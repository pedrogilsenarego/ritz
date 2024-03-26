import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
//import logo from "../../../assets/logo.svg";
import Logo from "../../../assets/EHTIQ_Logo.svg";
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
import { i18n } from "../../../translations/i18n";
import { CurrentUser } from "../../../types/user";
import Cart from "./Cart";
import LoginPopoverContent from "./LoginPopoverContent";
import UserPopoverContent from "./UserPopoverContent";
import { langOptions, options } from "./constants";
import "./index.css";
import useStyles from "./styles";
import useHeader from "./useHeader";

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

  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const path = location.pathname;
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorElLogin, setAnchorElLogin] = useState<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { onSignOut } = useSignOut();

  const handleClickPopover = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
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

  const handleUser = (e: any) => {
    handleClickPopover(e);
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

  const backgroundColor = `rgba(207, 181, 59, ${0.1 * opacity})`;

  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const triggerScrollPosition = 0.85 * viewportHeight - 350;

  const isScrolled = scrollPosition < triggerScrollPosition;

  const renderLaptop = () => {
    return (
      <Box
        id="first-box"
        style={{
          padding: "15px 0px 15px 0px",
          backgroundColor,
          marginTop: "20px",
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
              <Icons.Menu size={"30px"} />
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                onClick={() => navigate(ROUTE_PATHS.HOME)}
                src={Logo}
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
              <div>
                <img
                  src={SearchIcon}
                  alt="logo"
                  style={{
                    width: "24px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div>
                <img
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                  src={Login}
                  alt="logo"
                  style={{
                    width: "24px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Grid>
          </Grid>

          <Box
            style={{
              display: "flex",

              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              opacity: isScrolled ? 1 : 0,
              marginTop: isScrolled ? "40px" : "-20px", // Adjust the marginTop based on the scroll position
              transition: "all 0.5s ease-in-out", // Add transition property
            }}
          >
            {options.map((option, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "24px",
                    margin: "0px 15px",
                  }}
                >
                  <Typography
                    className={"text"}
                    style={{
                      cursor: !isScrolled ? undefined : "pointer",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color:
                        location.pathname === option.link
                          ? mainColors.secondary[400]
                          : "inherit",
                    }}
                    key={option.name}
                    onClick={
                      !isScrolled ? () => null : () => navigate(option.link)
                    }
                  >
                    {option.name}
                  </Typography>
                  {index < options.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "20px",
                        backgroundColor: "grey",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </Box>
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
          minWidth="30vw"
          fullHeight
          position="right"
          openDrawer={cartDrawer}
          setOpenDrawer={setCartDrawer}
        >
          <Cart closeCart={setCartDrawer} />
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
            padding: "0px 35px",
            top: "20px",
            width: "100%",
          }}
        >
          <VscMenu
            size="20px"
            color={mainColors.primary[400]}
            onClick={() => setMobileDrawer(true)}
          />
          <img
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            src={Logo}
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
          <Box
            mt="20px"
            padding="20px"
            display="flex"
            flexDirection="column"
            rowGap={4}
            justifyContent="center"
            alignItems="center"
          >
            <Divider style={{ width: "80%" }} />
            {location.pathname !== ROUTE_PATHS.HOME && (
              <Typography
                style={{ textTransform: "uppercase" }}
                fontWeight={800}
                onClick={() => {
                  navigate(ROUTE_PATHS.HOME);
                  setMobileDrawer(false);
                }}
              >
                {i18n.t("header.home")}
              </Typography>
            )}
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.COMPLEX);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("header.dna")}
            </Typography>
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.PRODUCTS);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("header.collections")}
            </Typography>
            {currentUser ? (
              <>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  fontWeight={800}
                  onClick={() => {
                    navigate(ROUTE_PATHS.MY_ACCOUNT);
                    setMobileDrawer(false);
                  }}
                >
                  {i18n.t("header.account")}
                </Typography>{" "}
                <Typography
                  style={{ textTransform: "uppercase" }}
                  fontWeight={800}
                  onClick={() => {
                    onSignOut();
                    setMobileDrawer(false);
                  }}
                >
                  {i18n.t("header.logout")}
                </Typography>
              </>
            ) : (
              <Typography
                style={{ textTransform: "uppercase" }}
                fontWeight={800}
                onClick={() => {
                  navigate(ROUTE_PATHS.LOGIN);
                  setMobileDrawer(false);
                }}
              >
                {i18n.t("header.login")}
              </Typography>
            )}

            <Divider style={{ width: "80%" }} />
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {totalCartItems > 0 && (
                <Box
                  style={{
                    position: "absolute",
                    right: -7,
                    bottom: -7,
                  }}
                >
                  <Typography
                    fontWeight={800}
                    fontSize="12px"
                    color={mainColors.primary[400]}
                  >
                    {totalCartItems}
                  </Typography>
                </Box>
              )}
              <Icons.Cart
                onClick={(e) => {
                  e.preventDefault();
                  setMobileDrawer(false);
                  setCartDrawer(true);
                }}
                className="icon"
                size={"23px"}
                color={mainColors.primary[400]}
                style={{ marginTop: "-3px", cursor: "pointer" }}
              />
            </div>
            <Divider style={{ width: "80%" }} />
            <BsInstagram
              className="icon"
              size="1.4rem"
              color={mainColors.primary[400]}
              style={{ cursor: "pointer" }}
            />
          </Box>
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
      </>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default Header;

import { Box, Divider, Grid, Typography } from "@mui/material";

import Loader from "../../../../../../components/Loader";
import Button from "../../../../../../components/Ui/Button";
import { ROUTE_PATHS } from "../../../../../../routes/constants";
import { Colors } from "../../../../../../theme/theme";
import { i18n } from "../../../../../../translations/i18n";

import useLogin from "./useLogin";
import ControlledFormInput from "../../../../../../components/Inputs/ControlledInputAdmin";
import ButtonBlue from "../../../../../../components/Ui/ButtonBlue";

type Props = {
  setMode: (mode: "register") => void;
  handleClose: () => void;
  visitCard?: boolean;
};

const Login = ({ setMode, handleClose, visitCard }: Props) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    isLogin,
    navigate,
    mobile,

    error,
  } = useLogin({ handleClose });

  return (
    <>
      <div>
        <Box
          style={{
            padding: mobile
              ? "80px 40px 40px 40px"
              : visitCard
              ? "32px 40px 40px 40px"
              : "80px 40px 40px 40px",
          }}
        >
          <p
            style={{
              fontSize: visitCard ? "15px" : "20px",
              fontWeight: 600,
              textAlign: "center",
              letterSpacing: "1px",
              fontFamily: "Inter",
              textTransform: "capitalize",
            }}
          >
            {i18n.t("auth.login.clientArea")}
          </p>

          <form
            style={{ marginTop: "30px" }}
            id="login-in"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <Grid container spacing={visitCard ? 2 : 4}>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="email"
                    inputPlaceholder={i18n.t("auth.login.email", "Email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="password"
                    inputPlaceholder={i18n.t("auth.login.password", "Password")}
                  />
                  <p
                    style={{
                      marginTop: "12px",
                      marginLeft: "12px",
                      fontFamily: "Inter",
                      fontSize: "7px",
                      fontWeight: 400,
                      letterSpacing: "1px",
                      textDecoration: "underline",
                      textTransform: "uppercase",
                    }}
                    onClick={() => navigate(ROUTE_PATHS.RECOVER_PASSWORD)}
                  >
                    {i18n.t("auth.login.passwordRecover")}
                  </p>
                </Grid>
              </Grid>
            </Box>
            {isLogin ? (
              <div
                style={{
                  width: "100%",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Loader size={60} />
              </div>
            ) : (
              <button
                type="submit"
                //onClick={() => handleSubmit(onSubmit)}
                style={{
                  marginTop: visitCard ? "20px" : "60px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  background: "none",
                  border: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: visitCard ? "12px" : "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "uppercase",
                    textDecoration: "underlined",
                    borderBottom: "solid 2px gray",
                  }}
                >
                  {i18n.t("auth.login.startSession")}
                </p>
              </button>
            )}
            {error && (
              <p
                style={{ textAlign: "center", marginTop: "20px", color: "red" }}
              >
                {error}
              </p>
            )}
          </form>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: visitCard ? "row" : "column",
            padding: visitCard ? "20px" : "40px",
            columnGap: "6px",
            justifyContent: "center",
            rowGap: "20px",
            alignItems: "center",
            background: "rgba(237, 233, 225, 1)",
          }}
        >
          <p
            style={{
              color: "black",
              cursor: "pointer",
              fontSize: visitCard ? "8px" : "11px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {i18n.t("auth.login.notClient")}
          </p>
          <ButtonBlue
            onClick={() => setMode("register")}
            label={i18n.t("auth.login.createAccount")}
            textStyles={{
              color: Colors.blackish[400],
              textTransform: "uppercase",
              fontFamily: "Inter",
              fontSize: visitCard ? "10px" : "13px",
              fontWeight: 500,
            }}
            styles={{
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;

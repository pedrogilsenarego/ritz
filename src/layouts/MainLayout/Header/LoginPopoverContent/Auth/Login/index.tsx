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
};

const Login = ({ setMode }: Props) => {
  const { handleSubmit, onSubmit, control, isLogin, navigate } = useLogin();
  return (
    <>
      {isLogin ? (
        <Loader
          customMessage={i18n.t("pages.auth.login.loaderMessage", "Logging in")}
        />
      ) : (
        <div>
          <Box style={{ padding: "80px 70px 40px 70px" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "center",
                letterSpacing: "1px",
                fontFamily: "Inter",
              }}
            >
              Área de cliente
            </p>

            <form
              style={{ marginTop: "40px" }}
              id="login-in"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <ControlledFormInput
                      control={control}
                      name="email"
                      inputPlaceholder={i18n.t(
                        "pages.auth.login.email",
                        "Email"
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ControlledFormInput
                      control={control}
                      type="password"
                      name="password"
                      inputPlaceholder={i18n.t(
                        "pages.auth.login.password",
                        "Password"
                      )}
                    />
                    <p
                      style={{
                        marginTop: "12px",
                        marginLeft: "12px",
                        fontFamily: "Inter",
                        fontSize: "8px",
                        fontWeight: 400,
                        letterSpacing: "1px",
                        textDecoration: "underline",
                        textTransform: "uppercase",
                      }}
                      onClick={() => navigate(ROUTE_PATHS.RECOVER_PASSWORD)}
                    >
                      Recuperar password
                    </p>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  marginTop: "60px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    textDecoration: "underlined",
                    borderBottom: "solid 2px gray",
                  }}
                >
                  Iniciar sessão
                </p>
              </Box>
            </form>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              rowGap: "20px",
              alignItems: "center",
              background: "rgba(237, 233, 225, 1)",
            }}
          >
            <p
              //onClick={() => navigate(ROUTE_PATHS.REGISTER)}
              style={{
                color: "black",
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Ainda não é cliente ehtiq?
            </p>
            <ButtonBlue
              onClick={() => setMode("register")}
              label=" Criar conta"
              textStyles={{
                color: Colors.blackish[400],
                textTransform: "uppercase",
                fontFamily: "Inter",
                fontSize: "13px",
                fontWeight: 500,
              }}
              styles={{
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

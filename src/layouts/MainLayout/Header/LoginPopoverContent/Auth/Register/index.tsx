import { Box, Divider, Grid, Typography } from "@mui/material";
import { Icons } from "../../../../../../components/Icons";
import ControlledFormInput from "../../../../../../components/Inputs/ControlledInputAdmin";
import Loader from "../../../../../../components/Loader";
import { i18n } from "../../../../../../translations/i18n";
import useRegister from "./useRegister";

import ButtonBlue from "../../../../../../components/Ui/ButtonBlue";

type Props = {
  setMode: (mode: "login") => void;
};

const Register = ({ setMode }: Props) => {
  const { handleSubmit, onSubmit, control, isRegistering } = useRegister();
  return (
    <>
      {isRegistering ? (
        <Loader
          customMessage={i18n.t(
            "pages.auth.register.loaderMessage",
            "Creating new user"
          )}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "10px" }}>
          <Box style={{ padding: "80px 70px 40px 70px", position: "relative" }}>
            <div
              onClick={() => setMode("login")}
              style={{
                position: "absolute",
                top: "30px",
                left: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "10px",
              }}
            >
              <Icons.LeftArrow />
              <p
                style={{
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  fontSize: "10px",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  letterSpacing: "1px",
                }}
              >
                Iníciar sessão
              </p>
            </div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "center",
                letterSpacing: "1px",
                fontFamily: "Inter",
              }}
            >
              Nova Conta
            </p>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p
                  style={{
                    marginTop: "30px",
                    fontSize: "7px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                  }}
                >
                  Dados obrigtórios
                </p>
              </Grid>
              <Grid item xs={12}>
                <ControlledFormInput
                  control={control}
                  name="username"
                  inputPlaceholder={i18n.t(
                    "pages.auth.register.username",
                    "Username*"
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledFormInput
                  control={control}
                  name="email"
                  inputPlaceholder={i18n.t(
                    "pages.auth.register.email",
                    "E-mail"
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledFormInput
                  control={control}
                  type="password"
                  name="password"
                  inputPlaceholder={i18n.t(
                    "pages.auth.register.password",
                    "Password"
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledFormInput
                  control={control}
                  type="password"
                  name="confirmPassword"
                  inputPlaceholder={i18n.t(
                    "pages.auth.register.confirmPassword",
                    "Confirm password"
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    marginTop: "10px",
                    height: "1px",
                    width: "100%",
                    backgroundColor: "lightGray",
                  }}
                />
                <p
                  style={{
                    marginTop: "30px",
                    fontSize: "7px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                  }}
                >
                  Dados facultativos
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  columnGap: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Telefone
                </p>
                <div style={{ display: "flex", columnGap: "5px" }}>
                  <div style={{ width: "60px" }}>
                    <ControlledFormInput
                      control={control}
                      name="prePhone"
                      inputPlaceholder=""
                    />
                  </div>
                  <ControlledFormInput
                    control={control}
                    name="phone"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.phone",
                      "Phone"
                    )}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Fotografia de Perfil
                </p>
                <ButtonBlue
                  label="Carregar"
                  textStyles={{ color: "white" }}
                  styles={{ backgroundColor: "rgba(81, 81, 81, 1)" }}
                />
              </Grid>
            </Grid>
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
            <ButtonBlue
              label="Registar-me"
              textStyles={{
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
        </form>
      )}
    </>
  );
};

export default Register;

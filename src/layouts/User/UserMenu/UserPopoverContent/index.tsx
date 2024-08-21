import { Box, useMediaQuery, useTheme } from "@mui/material";
import Close from "../../../../assets/close.svg";
import Settings from "../../../../assets/setting-01.svg";
import { useState } from "react";

import ButtonBlue from "../../../../components/Ui/ButtonBlue";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";
import { useForm } from "react-hook-form";
import Check from "../../../../assets/tick-02-white.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import useCookies from "../../../../hooks/useCookies";
import useUser from "../../../../hooks/useUser";
import { BASE_URL } from "../../../../services/constants";
import { i18n } from "../../../../translations/i18n";

type Props = {
  home?: boolean;
  handleClose: () => void;
};

const UserPopoverContent = ({ handleClose, home }: Props) => {
  const [mode, setMode] = useState<"normal" | "edit">("normal");
  const navigate = useNavigate();
  const user = useUser();
  const theme = useTheme();
  const { removeCookie } = useCookies();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { control } = useForm<any>({});

  const handleLogout = () => {
    navigate(ROUTE_PATHS.HOME);
    removeCookie("email");
    removeCookie("access");
    removeCookie("refresh");
    user.remove();
    user.refetch();
  };
  const Normal = () => {
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          padding: "30px 50px",
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
          width: mobile ? "90vw" : "400px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "12px", textTransform: "uppercase" }}>
          Área reservada
        </p>
        <p style={{ fontSize: "18px", fontWeight: 600 }}>
          {user.data?.Data.username}
        </p>
        <img
          alt=""
          src={`${BASE_URL}${user.data?.Data.imagem}`}
          style={{ height: "75px", aspectRatio: 1, borderRadius: "50%" }}
        />
        <p style={{ fontSize: "13px" }}> {user.data?.Data.email}</p>
        {!home && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMode("edit");
            }}
            style={{ display: "flex", columnGap: "5px", alignItems: "center" }}
          >
            <img alt="" src={Settings} style={{ height: "13px" }} />
            <p style={{ fontSize: "11px" }}>Editar conta</p>
          </div>
        )}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            alignItems: "center",
            borderTop: "2px solid lightGray",
            borderBottom: "1px solid lightGray",
            padding: "20px 40px",
            marginTop: "20px",
          }}
        >
          <p
            onClick={
              home
                ? () => navigate(ROUTE_PATHS.USER_HOME)
                : () => navigate(ROUTE_PATHS.HOME)
            }
            style={{ fontWeight: 600, fontSize: "14px" }}
          >
            {home ? i18n.t("privateArea.clientArea") : "Website EHTIQ"}
          </p>
          {user.data?.Data.is_admin && (
            <p
              onClick={() => navigate(ROUTE_PATHS.ADMIN_HOME)}
              style={{ fontWeight: 600, fontSize: "14px" }}
            >
              Admin
            </p>
          )}
        </Box>
        <p
          onClick={handleLogout}
          style={{ fontSize: "10px", textTransform: "uppercase" }}
        >
          Encerrar sessão
        </p>
      </div>
    );
  };

  const Edit = () => {
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          padding: "30px 30px 60px 30px",

          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
          width: mobile ? "90vw" : "400px",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", columnGap: "5px", alignItems: "center" }}
          >
            <img alt="" src={Settings} style={{ height: "13px" }} />
            <p style={{ fontSize: "11px" }}>Editar conta</p>
          </div>
          <img
            onClick={handleClose}
            src={Close}
            alt=""
            style={{ width: "27px" }}
          />
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <img
              alt=""
              src="https://letstryai.com/wp-content/uploads/2023/11/stable-diffusion-avatar-prompt-example-6.jpg"
              style={{ height: "58px", aspectRatio: 1, borderRadius: "50%" }}
            />
            <div>
              <ButtonBlue
                label="Editar Fotografia"
                styles={{ backgroundColor: "rgba(81, 81, 81, 1)" }}
                textStyles={{
                  fontSize: "8px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "solid 2px lightGray",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: 600,
              letterSpacing: "1PX",
            }}
          >
            Dados Pessoais
          </p>
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
          }}
        >
          <ControlledFormInput
            label="Nome Completo"
            control={control}
            name="name"
            inputPlaceholder="nome"
          />
          <ControlledFormInput
            label="E-mail"
            control={control}
            name="email"
            inputPlaceholder="e-mail"
          />
          <ControlledFormInput
            label="Telefone"
            control={control}
            name="mobile"
            inputPlaceholder="telefone"
          />

          <div
            style={{
              borderBottom: "solid 2px lightGray",
              width: "100%",
              paddingBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 600,
                letterSpacing: "1PX",
              }}
            >
              Dados Fiscais
            </p>
          </div>

          <ControlledFormInput
            label="Morada"
            control={control}
            name="address"
            inputPlaceholder="rua"
          />
          <div style={{ display: "flex", columnGap: "10px" }}>
            <div style={{ width: "40%" }}>
              <ControlledFormInput
                control={control}
                name="postalCode"
                inputPlaceholder="Código Postal"
              />
            </div>
            <div style={{ width: "60%" }}>
              <ControlledFormInput
                control={control}
                name="emailcity"
                inputPlaceholder="Cidade"
              />
            </div>
          </div>
          <ControlledFormInput
            label="Contribuinte"
            control={control}
            name="nif"
            inputPlaceholder="NIF"
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <ButtonBlue
              icon={Check}
              label="Guardar"
              styles={{ backgroundColor: "rgba(81, 81, 81, 1)" }}
              textStyles={{
                fontSize: "15px",
                fontFamily: "Inter",
                fontWeight: 400,
                color: "white",
              }}
            />
          </div>
        </form>
      </div>
    );
  };
  return mode === "normal" ? Normal() : Edit();
};

export default UserPopoverContent;

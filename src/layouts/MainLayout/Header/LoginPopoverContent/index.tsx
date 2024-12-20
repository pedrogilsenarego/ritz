import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSignOut } from "../../../../hooks/useLogout";
import { State } from "../../../../redux/types";

import { CurrentUser } from "../../../../types/user";
import Login from "./Auth/Login";
import RecoverPassword from "./Auth/RecoverPassword";
import Register from "./Auth/Register";
import { useMediaQuery, useTheme } from "@mui/material";

const LoginPopoverContent = ({ handleClose, visitCard }: any) => {
  const navigate = useNavigate();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const { onSignOut } = useSignOut();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mode, setMode] = useState<"login" | "register" | "recover">("login");

  const render = () => {
    switch (mode) {
      case "login":
        return (
          <Login
            visitCard={visitCard}
            setMode={setMode}
            handleClose={handleClose}
          />
        );
      case "register":
        return (
          <Register
            visitCard={visitCard}
            setMode={setMode}
            handleClose={handleClose}
          />
        );
      case "recover":
        return <RecoverPassword />;
      default:
        return <Login setMode={setMode} handleClose={handleClose} />;
    }
  };

  return (
    <div
      style={{
        width: mobile ? "auto" : visitCard ? "325px" : "400px",
      }}
    >
      {render()}
    </div>
  );
};

export default LoginPopoverContent;

import { Typography } from "@mui/material";
import LoginPopoverContent from "../../../../layouts/MainLayout/Header/LoginPopoverContent";
import { Button } from "../Button";
import { handleFetchTreatment } from "../../../../actions/tretaments";
import { useQuery } from "@tanstack/react-query";
import { State } from "../../../../redux/types";
import { useSelector } from "react-redux";
import { queryKeys } from "../../../../constants/queryKeys";
import { Screen } from "..";
import LeftArrow from "../../../../assets/leftArrow.svg";
import { i18n } from "../../../../translations/i18n";
import useCookies from "../../../../hooks/useCookies";
import { UserLogged } from "./UserLogged";
import useUser from "../../../../hooks/useUser";
import ButtonBlue from "../../../../components/Ui/ButtonBlue";
import { ButtonNinja } from "../../../../components/Ui/ButtonNinja";

type Props = {
  treatment: number | undefined;
  setScreen: (screen: Screen) => void;
};

export const ForthScreen = (props: Props) => {
  const lang = useSelector<State, string>((state) => state.general.lang);
  const { removeCookie } = useCookies();

  const { isLoading, data: queryData } = useQuery<any, any>(
    [queryKeys.treatment, props.treatment],
    () => handleFetchTreatment(props.treatment?.toString() || "")
  );
  const user = useUser();

  const handleLogout = () => {
    removeCookie("email");
    removeCookie("access");
    removeCookie("refresh");
    user.remove();
    user.refetch();
  };
  return (
    <div style={{ display: "flex", columnGap: "20px", height: "100%" }}>
      <div
        style={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            style={{
              color: "#484848",
              fontSize: "10px",
              textTransform: "uppercase",
            }}
          >
            {i18n.t(`visitCardFinal.personalAppointments`)}
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "28px",
              fontWeight: 500,
            }}
          >
            {i18n.t(`visitCardFinal.confirmationLogin`)}
          </Typography>
        </div>

        <div
          style={{
            borderRight: "solid 1px #687479",
            display: "flex",
            marginTop: "60px",
            marginBottom: "20px",
            paddingRight: "20px",
            flexDirection: "column",

            flex: 1,
          }}
        >
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
            <Typography
              style={{
                color: "#484848",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              Interesse:
            </Typography>
            <Button
              textStyle={{ fontSize: "11px", color: "#484848" }}
              style={{
                padding: "3px 20px",
                background: "rgba(255, 255, 255, 0.30)",
                borderRadius: "5px",
              }}
            >
              {queryData?.[`title_${lang.toLowerCase()}`]}
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "8px",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Typography
              style={{
                color: "#484848",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              Data:
            </Typography>
            <Button
              textStyle={{ fontSize: "11px", color: "#484848" }}
              style={{
                padding: "3px 20px",
                background: "rgba(255, 255, 255, 0.30)",
                borderRadius: "5px",
              }}
            ></Button>
          </div>
          {user.data && !user.isLoading ? (
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ButtonNinja
                onClick={() => props.setScreen("fifth")}
                buttonStyles={{ padding: "10px 20px" }}
                textStyles={{ fontSize: "10px" }}
                label={i18n.t(`visitCardFinal.confirm`)}
              ></ButtonNinja>
            </div>
          ) : (
            <>
              <Typography
                style={{
                  fontSize: "10px",
                  lineHeight: "20px",
                  color: "#484848",
                  fontWeight: 400,
                  textAlign: "center",
                  letterSpacing: "1px",
                  marginTop: "40px",
                }}
              >
                {i18n.t(`visitCardFinal.consultInfo`)}
                <b
                  style={{
                    fontSize: "10px",
                    lineHeight: "20px",

                    color: "#484848",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  {" "}
                  {i18n.t(`visitCardFinal.privateArea`)}
                </b>
                .
              </Typography>
            </>
          )}
        </div>
        <div
          onClick={() => props.setScreen("third")}
          style={{
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img alt="" src={LeftArrow} style={{ width: "10px" }} />
          <Typography
            style={{ fontSize: "11px", fontWeight: 500, color: "#484848" }}
          >
            {i18n.t(`visitCardFinal.backOptions`)}
          </Typography>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {user.data && !user.isLoading ? (
          <UserLogged handleLogout={handleLogout} />
        ) : (
          <div
            style={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "end",
              height: "100%",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.50)",

                display: "flex",
                maxHeight: "340px",
                overflow: "scroll",
              }}
            >
              <LoginPopoverContent visitCard handleClose={() => {}} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

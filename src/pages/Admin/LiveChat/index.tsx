import { Grid } from "@mui/material";
import GeneralPage from "../Presentational/GeneralPage";
import { ChatAccordeon } from "./components/ChatAccordeon";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow";

const LiveChat = () => {
  const [chat, setChat] = useState<boolean>(true);
  return (
    <GeneralPage title="Customer Service" subTitle="Live-Chat">
      <Grid container columnSpacing={"10px"} sx={{ height: "100%" }}>
        <Grid
          item
          xs={3}
          sx={{ rowGap: "15px", display: "flex", flexDirection: "column" }}
        >
          <ChatAccordeon header="Em espera" elements={[]} />
          <ChatAccordeon header="Meu Chat" elements={[]} />
          <ChatAccordeon header="Fechado" elements={[]} />
        </Grid>
        <Grid item xs={9}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "5px",
              height: "100%",
              overflow: "hidden",
            }}
          >
            {chat && <ChatWindow />}
          </div>
        </Grid>
      </Grid>
    </GeneralPage>
  );
};

export default LiveChat;

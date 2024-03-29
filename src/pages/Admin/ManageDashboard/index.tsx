import { Grid } from "@mui/material";
import GeneralPage from "../Presentational/GeneralPage";
import Dognut from "../../../assets/bx_bx-doughnut-chart.svg";
import { CSSProperties } from "react";

const ManageDashboard = () => {
  const Panel = ({
    title,
    subtitle,
    value,
    percentage,
    icon,
    entries,
    panelStyles,
  }: {
    title?: string;
    subtitle?: string;
    value?: number;
    percentage?: number;
    icon?: string;
    panelStyles?: CSSProperties;
    entries?: { title: string; value: number }[];
  }) => {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "40px",
          display: "flex",
          height: "100%",

          flexDirection: "column",
          rowGap: "30px",
          ...panelStyles,
        }}
      >
        {(title || icon || subtitle) && (
          <div style={{ display: "flex", columnGap: "10px" }}>
            {icon && <img src={icon} alt="" />}
            <div>
              {title && (
                <p style={{ fontSize: "14px", fontWeight: 600 }}>{title}</p>
              )}
              {subtitle && (
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "rgba(99, 98, 98, 1)",
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
        {(value || percentage) && (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: 400,

                position: "relative",
                lineHeight: "40px",
              }}
            >
              {value}
              {percentage && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "-35px",
                    lineHeight: "12px",
                    fontSize: "12px",
                    fontWeight: 500,
                    textAlign: "center",
                    color: percentage > 0 ? "lightGreen" : "red",
                  }}
                >
                  {percentage > 0 ? "+" : ""}
                  {percentage}%
                </span>
              )}
            </p>
          </div>
        )}
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}
        >
          {entries?.map((item, key) => {
            return (
              <div>
                <div
                  key={key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontWeight: 600, fontSize: "12px" }}>
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0, 119, 182, 1)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
                {key < entries.length - 1 && (
                  <div
                    style={{
                      marginTop: "8px",
                      height: "1px",
                      backgroundColor: "rgba(218, 218, 218, 1)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <GeneralPage title="Dashboard Analítico" subTitle="Performance">
      <Grid
        container
        columnSpacing={"20px"}
        style={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Grid item xs={8} style={{ height: "100%" }}>
          <Grid container columnSpacing={"10px"}>
            <Grid item xs={4}>
              <Panel
                title="Tráfego Orgânico"
                subtitle="Mês Corrente"
                value={42}
                percentage={10}
              />
            </Grid>
            <Grid item xs={4}>
              <Panel
                title="Tráfego Pago"
                subtitle="Mês Corrente"
                value={0}
                percentage={-2}
              />
            </Grid>
            <Grid item xs={4}>
              <Panel title="Distribuição Orgânica" />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={"10px"}
            style={{
              marginTop: "30px",
            }}
          >
            <Grid item xs={4}>
              <Panel
                icon={Dognut}
                title="Tráfego Geográfico"
                subtitle="Distribuição Orgânica"
              />
            </Grid>
            <Grid item xs={8}>
              <Panel title="Ranking de URL" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Panel
              panelStyles={{ padding: "40px 20px" }}
              entries={[
                { title: "Links Externos", value: 12 },
                { title: "Links Internos", value: 10 },
              ]}
            />
            <Panel
              panelStyles={{ padding: "40px 20px" }}
              entries={[
                { title: "Total Páginas", value: 24 },
                { title: "Indexadas", value: 10 },
              ]}
            />
          </div>
          <div>
            <Panel panelStyles={{ marginTop: "30px" }} title="Report Mensal" />
          </div>
        </Grid>
      </Grid>
    </GeneralPage>
  );
};

export default ManageDashboard;

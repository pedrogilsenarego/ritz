import { Grid } from "@mui/material";
import GeneralPage from "../Presentational/GeneralPage";
import Dognut from "../../../assets/bx_bx-doughnut-chart.svg";
import { CSSProperties } from "react";
import Carousel from "../../../components/Carousel";
import FileImage from "../../../assets/file_flat.svg";
import Download from "../../../assets/download-04.svg";
import Chart from "../../../assets/icon_chart_bar.svg";
import TwoLevelChartPie from "../../../components/Charts/TwoLevelChartPie";
import { useDashboard } from "./useDasboard";

const ManageDashboard = () => {
  const { data } = useDashboard();

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
          borderRadius: "10px",
          padding: "30px 30px 20px 30px",
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
  const Link = ({ link }: { link: any }) => {
    return (
      <div style={{ display: "flex", padding: "0px 30px 10px 30px" }}>
        <div style={{ width: "60%" }}>
          <p
            style={{
              color: "rgba(43, 54, 116, 1)",
              fontSize: "12px",
              fontWeight: 400,
              textDecoration: "underline",
            }}
          >
            {link?.url || ""}
          </p>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "rgba(0, 119, 182, 1)",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            {link?.trafego || 0}
          </p>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "rgba(0, 119, 182, 1)",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            {link?.keywords || 0}
          </p>
        </div>
      </div>
    );
  };
  const PanelLink = ({
    title,

    panelStyles,
  }: {
    title?: string;

    panelStyles?: CSSProperties;
  }) => {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          paddingBottom: "30px",
          display: "flex",
          height: "100%",

          flexDirection: "column",

          ...panelStyles,
        }}
      >
        {title && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              padding: "30px 30px 20px 30px",
            }}
          >
            {title}
          </p>
        )}
        <div style={{ display: "flex", padding: "0px 30px 10px 30px" }}>
          <div style={{ width: "60%" }}>
            <p style={{ color: "gray", fontSize: "12px", fontWeight: 400 }}>
              URL
            </p>
          </div>
          <div
            style={{ width: "20%", display: "flex", justifyContent: "center" }}
          >
            <p style={{ color: "gray", fontSize: "12px", fontWeight: 400 }}>
              Tráfego
            </p>
          </div>
          <div
            style={{ width: "20%", display: "flex", justifyContent: "center" }}
          >
            <p style={{ color: "gray", fontSize: "12px", fontWeight: 400 }}>
              Palavras-chave
            </p>
          </div>
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "lightGray",
            marginBottom: "30px",
          }}
        />
        {data?.rankingURL?.map((link: any, index: number) => {
          return <Link link={link} key={index} />;
        })}
      </div>
    );
  };
  const PanelCarousel = ({
    title,

    panelStyles,
  }: {
    title?: string;

    panelStyles?: CSSProperties;
  }) => {
    if (!data?.report) return <></>;
    const handleOpenReport = (index: number) => {
      const filePath = data?.report[index]?.file_path;
      if (filePath) {
        window.open(filePath, "_blank");
      } else {
        console.error("File path is invalid");
      }
    };
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          height: "100%",
          flexDirection: "column",

          ...panelStyles,
        }}
      >
        {title && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                padding: "30px 30px 0px 30px",
              }}
            >
              {title}
            </p>
          </div>
        )}
        <div style={{ padding: "40px 30px 28px 30px" }}>
          <Carousel
            navButton={true}
            navType="admin"
            width={"100%"}
            dragThreshold={50}
            dots={false}
            height={"auto"}
            pauseDuration={3000}
            slideDuration={1000}
            direction={1}
            autoPlay={false}
            tweenAnime="ease"
          >
            {data?.report?.map((item: any, index: any) => (
              <div
                draggable={false}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: "20px",
                  position: "relative",
                }}
              >
                <img
                  src={Chart}
                  alt=""
                  style={{ position: "absolute", top: "20px" }}
                />
                <img src={FileImage} alt="" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "4px",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>{item?.month}</p>
                  <p style={{ fontSize: "12px" }}>{item?.year}</p>
                  <div
                    style={{
                      backgroundColor: "rgba(75, 173, 204, 0.32)",
                      padding: "2px 14px",
                      borderRadius: "7px",
                      display: "flex",
                    }}
                  >
                    <img
                      src={Download}
                      alt=""
                      onClick={() => handleOpenReport(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  const PanelChart = ({
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
    const dataa = [
      {
        name: "PT",
        value: data?.trafegoGeoPT || 0,
        color: "rgba(0, 180, 216, 1)",
      },
      {
        name: "UK",
        value: data?.trafegoGeoUK || 0,
        color: "rgba(0, 119, 182, 1)",
      },
      {
        name: "ES",
        value: data?.trafegoGeoES || 0,
        color: "rgba(3, 4, 94, 1)",
      },
    ];
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px 30px 20px 30px",
          display: "flex",
          height: "100%",

          flexDirection: "column",
          rowGap: "5px",
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <TwoLevelChartPie data={dataa} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between  " }}>
          {dataa.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                columnGap: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "13px",
                  borderRadius: "20px",
                  width: "20px",
                  backgroundColor: item.color,
                }}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <GeneralPage title="Dashboard Analítico" subTitle="Performance">
      <Grid
        container
        columnSpacing={"10px"}
        style={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Grid item xs={9} style={{ height: "100%" }}>
          <Grid container columnSpacing={"10px"}>
            <Grid item xs={4}>
              <Panel
                title="Tráfego Orgânico"
                subtitle="Mês Corrente"
                value={data?.trafegoOrganico || 0}
                percentage={10}
              />
            </Grid>
            <Grid item xs={4}>
              <Panel
                title="Tráfego Pago"
                subtitle="Mês Corrente"
                value={data?.trafegoPago || 0}
                percentage={-2}
              />
            </Grid>
            <Grid item xs={4}>
              <Panel
                title="Distribuição Orgânica"
                value={data?.distribuicaoOrganica || 0}
              />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={"10px"}
            style={{
              marginTop: "10px",
            }}
          >
            <Grid item xs={4}>
              <PanelChart
                icon={Dognut}
                title="Tráfego Geográfico"
                subtitle="Distribuição Orgânica"
              />
            </Grid>
            <Grid item xs={8}>
              <PanelLink title="Ranking de URL" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Panel
              panelStyles={{ padding: "30px 30px 20px 30px" }}
              entries={[
                { title: "Links Externos", value: data?.linksExternos || 0 },
                { title: "Links Internos", value: data?.linksInternos || 0 },
              ]}
            />
            <Panel
              panelStyles={{ padding: "30px 30px 20px 30px" }}
              entries={[
                { title: "Total Páginas", value: data?.totalPaginas || 0 },
                { title: "Indexadas", value: data?.indexadas || 0 },
              ]}
            />
          </div>
          <div>
            <PanelCarousel
              panelStyles={{ marginTop: "10px" }}
              title="Report Mensal"
            />
          </div>
        </Grid>
      </Grid>
    </GeneralPage>
  );
};

export default ManageDashboard;

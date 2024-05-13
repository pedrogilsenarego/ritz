import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedAccordions from "../../../../../../components/Accordion";
import { ROUTE_PATHS } from "../../../../../../routes/constants";
import Tile from "./Components/Tile";

const ByBodyPart = () => {
  const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const teamList = [
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Rosto",
      treatments: [
        { label: "Etc", id: "facial-mask" },
        { label: "Etc", id: "facial-mask2" },
      ],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Sorriso",
      treatments: [
        { label: "Etc", id: "facial-mask" },
        { label: "Etc", id: "facial-mask2" },
      ],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Corpo",
      treatments: [
        { label: "Etc", id: "facial-mask" },
        { label: "Etc", id: "facial-mask2" },
      ],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Non-surgical",
      treatments: [
        { label: "Etc", id: "facial-mask" },
        { label: "Etc", id: "facial-mask2" },
      ],
    },
  ];

  return (
    <CustomizedAccordions title="Por zonas do corpo">
      <div style={{ padding: "50px 0px" }}>
        <div
          style={{
            rowGap: mobile ? "40px" : "120px",
            columnGap: mobile ? "10px" : "120px",

            width: "100%",

            display: "flex",
            flexWrap: "wrap",
            justifyContent: mobile ? "space-around" : "center",
          }}
        >
          {teamList.map((member, index) => {
            return (
              <Tile
                onClick={() => {
                  setSelectedClinic(index);
                }}
                selected={index === selectedClinic}
                key={index}
                image={member.image}
                clinicName={member.clinicName}
              />
            );
          })}
        </div>
        {selectedClinic !== null && (
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              columnGap: "40px",
              justifyContent: "center",
            }}
          >
            {teamList[selectedClinic].treatments.map((member, index) => {
              return (
                <Typography
                  onClick={() =>
                    navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", member.id))
                  }
                  key={index}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    textTransform: "uppercase",

                    textAlign: "center",
                  }}
                >
                  {member.label}
                </Typography>
              );
            })}
          </div>
        )}
      </div>
    </CustomizedAccordions>
  );
};

export default ByBodyPart;

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CustomizedAccordions from "../../../../../../components/Accordion";
import Tile from "./Components/Tile";

const ByBodyPart = () => {
  const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const teamList = [
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Lounge & Carrier",
      treatments: ["Etc", "tratment 1"],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Dental",
      treatments: ["Etc", "tratment 2"],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Surgical",
      treatments: ["Etc", "tratment 3"],
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      clinicName: "Non-surgical",
      treatments: ["Etc", "tratment 4"],
    },
  ];

  return (
    <CustomizedAccordions title="Por especialidade">
      <div style={{ padding: "50px 0px" }}>
        <div
          style={{
            gap: mobile ? "10px" : "120px",
            width: "100%",

            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
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
                  key={index}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    textTransform: "uppercase",

                    textAlign: "center",
                  }}
                >
                  {member}
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

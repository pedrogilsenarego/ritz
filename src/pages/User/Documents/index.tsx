import Subpage from "../../../layouts/User/Subpage";

const UserDocuments = () => {
  const mokData1 = [
    "Consentimento_informado_TB_21/06.pdf",
    "Consentimento_informado_TB_21/06.pdf",
    "Consentimento_informado_TB_21/06.pdf",
  ];
  const mokData2 = [
    "RX_Panorâmico_Dental_21/06.pdf",
    "RX_Panorâmico_Dental_21/06.pdf",
    "RX_Panorâmico_Dental_21/06.pdf",
  ];
  return (
    <Subpage title="Documentos">
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "100%",
          columnGap: "130px",
        }}
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              borderBottom: "1px darkGrey solid",
              paddingBottom: "10px",
            }}
          >
            <p
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Consentimentos
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              marginTop: "40px",
              paddingLeft: "20px",
            }}
          >
            {mokData1.map((data, index) => {
              return (
                <p
                  style={{
                    fontSize: "15px",
                    letterSpacing: "1px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {data}
                </p>
              );
            })}
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              borderBottom: "1px darkGrey solid",
              paddingBottom: "10px",
            }}
          >
            <p
              style={{
                marginLeft: "20px",
                fontSize: "17px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Outros documentos
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              marginTop: "40px",
              paddingLeft: "20px",
            }}
          >
            {mokData2.map((data, index) => {
              return (
                <p
                  style={{
                    fontSize: "15px",
                    letterSpacing: "1px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {data}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Subpage>
  );
};

export default UserDocuments;

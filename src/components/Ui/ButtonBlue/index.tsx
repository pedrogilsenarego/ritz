type Props = {
  icon: string;
  label: string;
};

const ButtonBlue = ({ icon, label }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#93C0D9",
        borderRadius: "15px",
        padding: "6px 20px",
        display: "flex",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <img src={icon} alt="" style={{ width: "20px" }} />
      <p style={{ fontSize: "15px" }}>{label}</p>
    </div>
  );
};

export default ButtonBlue;

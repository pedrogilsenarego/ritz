type Props = {
  children: React.ReactNode;
  title: string;
};

const Subpage = ({ children, title }: Props) => {
  return (
    <div
      style={{
        padding: "100px 70px 10px 70px",

        height: "100%",
      }}
    >
      <div style={{ borderLeft: "2px solid black", paddingLeft: "25px" }}>
        <p style={{ fontSize: "35px", letterSpacing: "1px", fontWeight: 500 }}>
          {title}
        </p>
      </div>
      <div
        style={{
          height: "100%",
          padding: "80px 60px 70px 60px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Subpage;

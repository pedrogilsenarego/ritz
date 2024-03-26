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
      {children}
    </div>
  );
};

export default Subpage;

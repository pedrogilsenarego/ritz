type Props = {
  children: React.ReactNode;
};

export const AdminCard: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",

        backgroundColor: "white",
      }}
    >
      {children}
    </div>
  );
};

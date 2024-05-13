import ByBodyPart from "./Components/ByBodyPart";

import BySpeciality from "./Components/BySpeciality";

const SearchSection = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <BySpeciality />
      <ByBodyPart />
    </div>
  );
};

export default SearchSection;

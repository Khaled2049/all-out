import { createContext, useState } from "react";
import hikeData from "../../data/hikes.json";
import climbData from "../../data/climbs.json";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [hikes, setHikes] = useState(hikeData);
  const [climbs, setClimbs] = useState(climbData);
  const [isMember, setIsMember] = useState(true);

  const valueToShare = {
    token,
    hikes,
    climbs,
    SetToken: (token) => setToken(token),
  };

  return (
    <MyContext.Provider value={valueToShare}>{children}</MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;

import { createContext, useState } from "react";
import hikeData from "../../data/hikes.json";
import climbData from "../../data/climbs.json";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [hikes, setHikes] = useState(hikeData);
  const [climbs, setClimbs] = useState(climbData);
  const [groups, setGroups] = useState([]);

  const valueToShare = {
    groups,
    token,
    hikes,
    climbs,
    SetToken: (token) => setToken(token),
    AddGroup: (group) => setGroups([...groups, group]),
  };

  return (
    <MyContext.Provider value={valueToShare}>{children}</MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;

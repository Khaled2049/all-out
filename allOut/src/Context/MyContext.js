import { createContext, useState } from "react";
import hikeData from "../../data/hikes.json";
import climbData from "../../data/climbs.json";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [hikes, setHikes] = useState(hikeData);
  const [climbs, setClimbs] = useState(climbData);
  const [groups, setGroups] = useState([
    {
      groupId: "hujjjnpde",
      groupName: "Khaled's group",
      members: [{ id: 123, userName: "khaled", email: "1@2.com" }],
    },
  ]);

  const valueToShare = {
    user,
    groups,
    token,
    hikes,
    climbs,
    SetToken: (token) => setToken(token),
    AddGroup: (group) => setGroups([...groups, group]),
    AddMember: (groupName, member) => {
      groups.map((group) => {
        if (group.groupName === groupName) {
          setGroups([
            ...groups.filter((group) => group.groupName !== groupName),
            {
              ...group,
              members: [...group.members, member],
            },
          ]);
        }
      });
    },
    SetUser: (user) => setUser(user),
  };

  return (
    <MyContext.Provider value={valueToShare}>{children}</MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;

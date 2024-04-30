import { createContext, useState } from "react";
import hikeData from "../../data/hikes.json";
import climbData from "../../data/climbs.json";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [hikes, setHikes] = useState(hikeData);
  const [climbs, set] = useState(climbData);
  const [groups, setGroups] = useState([
    {
      groupId: "hujjjnpde",
      groupName: "Khaled's group",
      members: [
        { id: 123, userName: "khaled", email: "1@2.com" },
        { id: 124, userName: "Jacob", email: "2@2.com" },
        { id: 125, userName: "Tom", email: "3@2.com" },
        { id: 126, userName: "Andrew", email: "4@2.com" },
        { id: 127, userName: "Francois", email: "5@2.com" },
        { id: 128, userName: "Ace", email: "6@2.com" },
      ],
    },
  ]);

  const AddMember = (groupName, member) => {
    // Create a new array of groups with the updated members for the specific group
    const updatedGroups = groups.map((group) => {
      if (group.groupName === groupName) {
        // Create a new group object with updated members
        return {
          ...group,
          members: [...group.members, member],
        };
      }
      return group; // Return unchanged group if it's not the target group
    });

    // Update the groups state with the new array
    setGroups(updatedGroups);
  };

  const valueToShare = {
    user,
    groups,
    token,
    hikes,
    climbs,
    SetToken: (token) => setToken(token),
    AddGroup: (group) => setGroups([...groups, group]),
    AddMember: AddMember,
    SetUser: (user) => setUser(user),
  };

  return (
    <MyContext.Provider value={valueToShare}>{children}</MyContext.Provider>
  );
};

export { MyProvider };
export default MyContext;

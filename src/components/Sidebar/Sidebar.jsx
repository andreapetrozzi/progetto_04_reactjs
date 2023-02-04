import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Sidebar.css";
import "./alsoViewed.css";

import EditSidebox from "./EditSidebox";
import PromotedSideBox from "./PromotedSideBox";
import AlsoViewed from "./AlsoViewed";
import PeopleMayKnow from "./PeopleMayKnow";
import Learning from "./Learning";

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.ok) {
        let responseJson = await response.json();
        console.log(responseJson);
        setUsers(responseJson);
        return users;
      } else {
        console.log("Errore durante il recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col md={2} className="px-0">
      <EditSidebox />
      <PromotedSideBox />
      <AlsoViewed users={users} setUsers={setUsers} />
      <PeopleMayKnow users={users} setUsers={setUsers} />
      <Learning />
    </Col>
  );
};
export default Sidebar;

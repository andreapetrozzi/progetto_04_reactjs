import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SecondNotification from "./SecondNotification";
import "./Notification.css";
import PromotedSideBox from "../Sidebar/PromotedSideBox";

const Notifications = ({ userProfile, setUserProfile }) => {
  const [notification, setNotification] = useState([]);
  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (res.ok) {
        let userProfile = await res.json();
        setNotification(userProfile);
        console.log(notification);
      } else {
        console.log("Qualcosa è andato storto durante il recupero dei dati");
      }
    } catch (err) {
      console.log("Errore durante la connessione al server");
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={"3"} className="mt-2">
            <Card className="mt-3" style={{ borderRadius: "0.6rem" }}>
              <Card.Body className=" side__notification">
                <Card.Text className="">Gestisci le tue notifiche</Card.Text>
                   <Link to="/" className="">Impostazioni</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={"6"} className="mt-4">
            <SecondNotification profiles={notification} />
          </Col>

          <Col xs={"3"} className="mt-4 pt-1">
            <PromotedSideBox />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Notifications;

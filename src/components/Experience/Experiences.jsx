import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import { IoSend } from "react-icons/io5";

import SingleExperience from "./SingleExperience";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "" || null,
    description: "",
    area: "",
  });
  const params = useParams();

  const [addExperience, setAddExperience] = useState(false);

  const closeAddExperience = () => setAddExperience(false);
  const showAddExperience = () => setAddExperience(true);

  const sendExperience = async (e) => {
    e.preventDefault();
    const exp = {
      ...experience,
    };
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e68379c2c1880015ab949c/experiences`,
        {
          method: "POST",
          body: JSON.stringify(exp),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setExperience(data);
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const getExperiences = async (profileID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const experiences = await response.json();
        return experiences;
      } else {
        console.log("fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getExperiencesById = async () => {
    try {
      const resp = await getExperiences(params.id);
      setExperiences(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line
  useEffect(() => getExperiencesById(), []);

  return (
    <>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <span className="d-flex flex-row mb-3">
          <h5 className="title__activity mb-4">Esperienza</h5>
          <div className="d-flex mr-auto" style={{ marginLeft: "35em" }}>
            <PlusLg
              size={26}
              id=""
              className="mt-4 mr-4"
              onClick={showAddExperience}
            />
          </div>
        </span>

        {experiences.map(
          ({
            company,
            _id: id,
            role,
            area,
            startDate,
            endDate,
            description,
          }) => (
            <>
              <div className="">
                <SingleExperience
                  key={id}
                  company={company}
                  id={id}
                  role={role}
                  area={area}
                  description={description}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </>
          )
        )}
      </Card>
      <Modal show={addExperience} onHide={closeAddExperience}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi posizione lavorativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendExperience}>
            <Form.Group>
              <Form.Label>Compagnia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome compagnia"
                required
                value={experience.company}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ruolo"
                value={experience.role}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    role: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrizione attivit??"
                value={experience.description}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Luogo"
                required
                value={experience.location}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    location: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                type="date"
                value={experience.startDate}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                type="date"
                value={experience.endDate}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button variant="success" type="submit">
              <IoSend size={26} />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Experiences;

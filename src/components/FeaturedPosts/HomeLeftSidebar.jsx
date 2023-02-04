import { Card, ListGroup, List, Col, Row } from "react-bootstrap";
import { BsBookmarkFill, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import "./StartAPost.css";


const HomeLeftSidebar = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Row style={{ width: "18rem", marginLeft: "0px" }}>
        <Card>
          <Card.Header className="text-center" style={{ height: "3rem" }}>
            <img
              className="profile-image-posts"
              src={userProfile?.image}
              alt=""
            />
          </Card.Header>
          <Card.Title className="text-center mt-5">
            {userProfile?.name} {userProfile?.surname}
          </Card.Title>
          <Card.Text className="text-secondary text-center">
            <p>UI-UX Designer | Frontend Developer Lavora a Lorem Ipsum</p>
          </Card.Text>
          <ListGroup variant="flush" className="d-flex">
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 mt-2 text_muted">
                Chi ha visitato il tuo profilo?
              </p>
              <p className="num_post mt-2">681</p>
            </div>
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 text_muted ">Impressioni dei tuoi post</p>
            </div>
          </ListGroup>
          <ListGroup variant="flush">
            <div classNamed="d-flex">
              <p className="pl-3 pt-1 mt-2  text_muted">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <p className="pl-5 pt-1  text-dark">Prova Premium gratis</p>
            </div>
          </ListGroup>
          <ListGroup variant="flush">
            <div className="d-flex">
              <BsBookmarkFill className="saved" />{" "}
              <p className="pl-2"> I miei elementi</p>
            </div>
          </ListGroup>
        </Card>
        <Card
          id="right-sidebar__right"
          className="pt-2 px-0 mt-3"
          style={{ borderRadius: "7px", width: "18rem", marginLeft: "5.5em" }}
        >
          <Card.Title className="my-auto px-3">Recenti </Card.Title>

          <Card.Body id="follow" className="px-3">
            <Row>
              <Col className="d-flex flex-row align-items-center">
                <i className="bi bi-archive-fill"></i>
                <p className="mb-0 pl-2">Corso gratuito di web marketing...</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column my-2">
                <a href=""> Gruppi </a>
                <span className="d-flex flex-row">
                  <a href="" className="my-2 mr-auto">
                    Eventi
                  </a>
                  <i className="bi bi-plus-lg align-self-center"></i>
                </span>
                <a href="">Hashtag seguiti</a>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="pt-2 pb-0 text-center">
            <p>Scopri di più</p>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default HomeLeftSidebar;

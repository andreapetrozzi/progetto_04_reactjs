import {
  faFileVideo,
  faPhotoVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  PencilFill,
  FilePost,
  Calendar2Event,
  JournalCheck,
  MusicPlayer,
} from "react-bootstrap-icons";
import "../FeaturedPosts/StartAPost.css";
import { BiWorld, BiMessageRoundedDetail } from "react-icons/bi";

import { BsThreeDots } from "react-icons/bs";

import { MdPhotoSizeSelectActual, MdPoll } from "react-icons/md";
import { RiVideoFill, RiHandbagFill, RiSettings2Fill } from "react-icons/ri";

import { IoDocumentText } from "react-icons/io5";
import {
  FcImageFile,
  FcClapperboard,
  FcPicture,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import {
  MydModalWithGrid,
  Dropdown,
  Image,
  Form,
  Card,
  Modal,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { useState } from "react";


const StartAPost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newPost, setNewPost] = useState({
    text: " ",
  });
  const [modalShow, setModalShow] = useState(false);

  const createNewPost = async (e) => {
    e.preventDefault();

    const newPostToSend = {
      ...newPost,
    };

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(newPostToSend),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.ok) {
        const newPostJson = await response.json();
        console.log(newPostJson);
        setNewPost(newPostJson);
        alert("Post was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="feed">
        <Card.Body>
          <div className="d-flex flex-row">
            <Image src="profile-photo.jpg" alt="" className="start__img" />
            <span className="d-flex flex-column ml-3">
              <Card.Title>
                <div style={{ marginTop: "1vh" }} className="">
                  <Container
                    onClick={handleShow}
                    className="search__container__onscroll "
                  >
                    <Row className="search__bar__elements__row">
                      <small className="">Avvia un post</small>
                    </Row>
                  </Container>
                </div>
              </Card.Title>
            </span>
          </div>
          <div className="feed__inputOptions d-flex justify-content-between mt-2 mx-1">
            <Button className=" d-flex start__btn">
              <FcPicture size={26} />
              <small className="text-muted ml-2 mt-1 start__txt">
                Foto
              </small>{" "}
            </Button>
            <Button className="d-flex start__btn">
              <FcClapperboard size={26} />
              <small className="text-muted ml-2 mt-1 start__txt">
                Video
              </small>{" "}
            </Button>

            <Button className="d-flex start__btn">
              <FcPlanner size={26} />
              <small className="text-muted ml-2 mt-1 start__txt">
                Eventi
              </small>{" "}
            </Button>
            <Button className="d-flex start__btn">
              <FcViewDetails size={26} />
              <small className="text-muted ml-2 mt-1 start__txt">
                Scrivi un articolo
              </small>{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/*   <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span id="modal__title">Crea un post</span>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Card.Body>
                <div className="d-flex flex-row">
                  <Image
                    src="profile-photo.jpg"
                    alt=""
                    className="start__img"
                  />
                  <span className="d-flex flex-column ml-3">
                    <Card.Text className="">And Pe</Card.Text>
                    <Card.Subtitle className="text-muted">
                      <Button variant="light" className="anyone__btn">
                        <BiWorld className="mr-2 text-muted" />
                        Chiunque
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="light"
                            split
                            className="dropdown__btn"
                            id="dropdown-split-basic"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Azione
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Altra azione
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Button>
                    </Card.Subtitle>
                  </span>
                </div>
              </Card.Body>
            </Row>
            <Row>
              <Form className="" onSubmit={createNewPost}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder="What do you want to talk about?"
                    rows={5}
                    style={{ border: "transparent", width: "60vh" }}
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({
                        text: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <div className="d-flex">
                  <Button type="" variant="light" className="hashtag__btn">
                    Aggiungi hashtag
                  </Button>
                  <Button className="post__btn" variant="light" type="submit">
                    Pubblica
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-around">
          <Row className="ml-3 text-muted ">
            <MdPhotoSizeSelectActual className="mr-3" size={23} />
            <RiVideoFill className="mr-3" size={23} />
            <IoDocumentText className="mr-3" size={23} />
            <RiHandbagFill className="mr-3" size={23} />
            <RiSettings2Fill className="mr-3" size={23} />
            <MdPoll className="mr-3" size={23} />
            <BsThreeDots className="mr-2" size={23} />
            <hr />
            <Button variant="light" className="anyone__btn__footer" style={{}}>
              <BiMessageRoundedDetail className="mr-2 text-muted" />
              <small>Chiunque</small>
            </Button>

            <Button
              variant="light"
              className="close__btn ml-2"
              onClick={handleClose}
            >
              Chiudi
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StartAPost;

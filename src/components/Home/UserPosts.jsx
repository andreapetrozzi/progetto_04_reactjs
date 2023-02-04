import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SingleFeed from "./SingleFeed";
import SinglePost from "./SinglePost";
const UserPosts = ({ postsAdded }) => {
  const [posts, setPosts] = useState(null);
  const [numOfPosts, setNumOfPosts] = useState(20);

  const [postsChanged, setPostsChanged] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostDetails, setSelectedPostDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const fetchPostDetails = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedPostDetails(data);
      } else {
        console.error("Fetch Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, [selectedPost]);

  const handleEdit = (id) => {
    setSelectedPost(id);
    handleShowModal();
  };

  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.status === 401) alert("Non puoi eliminare altri post");

      if (response.ok) {
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`,
        {
          method: "PUT",
          body: JSON.stringify({
            text: selectedPostDetails.text,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.status === 401) alert("Non puoi aggiornare gli altri post");
      if (response.ok) {
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiOGMwYjUwMWZlODAwMTU2MGMyMGYiLCJpYXQiOjE2NzUzMzI2MjAsImV4cCI6MTY3NjU0MjIyMH0.UI1_iuYyUi7ZoMWiwO1QXHOyn0LxM91ju-bEf4_Nmo8`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error("Fetch fallita");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postsAdded, postsChanged]);

  return (
    <>
      {posts &&
        posts
          .slice(posts.length - numOfPosts, posts.length)
          .reverse()
          .map((post) => <SinglePost post={post} handleEdit={handleEdit} />)}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPostDetails?.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              as="textarea"
              className="border-0"
              rows={3}
              value={selectedPostDetails?.text}
              onChange={(e) =>
                setSelectedPostDetails({
                  ...selectedPostDetails,
                  text: e.target.value,
                })
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdatePost}>
            Aggiorna
          </Button>
          <Button variant="danger" onClick={handleDeletePost}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UserPosts;

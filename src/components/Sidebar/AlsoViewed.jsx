import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import RandomUsersCard from "./RandomUsersCard";

const AlsoViewed = (props) => {
  const [contentToShow, setContentToShow] = useState(false);
  const toggleShowMore = () => {
    setContentToShow(!contentToShow);
  };

  const ArrowDown = () => <i className="bi bi-chevron-compact-down ml-1"></i>;
  const ArrowUp = () => <i class="bi bi-chevron-compact-up ml-1"></i>;

  return (
    <Card id="also-viewed" className="mb-4" style={{ borderRadius: "7px" }}>
      <Card.Title className="my-3 px-2 pt-2">
        Altre aziende consultate
      </Card.Title>

      {props.users.slice(0, 5).map((user) => (
        <RandomUsersCard
          src={user.image}
          alt={user.name}
          text={user.title}
          name={user.name}
          surname={user.surname}
          key={user._id}
        />
      ))}
      {contentToShow && (
        <div>
          {props.users.slice(6, 11).map((user) => (
            <RandomUsersCard
              src={user.image}
              alt={user.name}
              text={user.title}
              name={user.name}
              surname={user.surname}
              key={user._id}
            />
          ))}
        </div>
      )}
      <Button
        className="btn-connect card-bottom d-flex justify-content-center align-items-center"
        onClick={() => toggleShowMore()}
      >
        {contentToShow ? `Show less` : "Show more"}{" "}
        {contentToShow ? ArrowUp() : ArrowDown()}
      </Button>
    </Card>
  );
};
export default AlsoViewed;

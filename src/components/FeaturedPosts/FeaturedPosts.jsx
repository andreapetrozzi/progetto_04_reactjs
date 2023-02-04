import { Card, Container, Row } from "react-bootstrap";
import image from "../../assests/featured-post.png";
import "./FeaturedPosts.css";


const FeaturedPosts = () => {
  return (
    <>
      <Card
        className="px-2 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <Row>
          <h5 className="title__deco">Informazioni</h5>
        </Row>
        <Row className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus dolore error recusandae non nihil qui praesentium cum
          veritatis aliquam aut, nam, officiis earum iure rerum eum corporis
          repudiandae nobis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit.
        </Row>
      </Card>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <div>
          <h5 className="title">Attività</h5>
        </div>
        <div
          className="card mb-3"
          style={{ overflow: "hidden", margin: "10px", borderRadius: "9px" }}
        >
          <small className="text-muted py-2 px-2">Link · 1anno</small>
          <div className="row g-0" style={{ backgroundColor: "#f9fafb" }}>
            <div className="col-md-6">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h6 className="card-title">
                  Come ho creato la configurazione di business
                  intelligence/analisi per Startup{" "}
                </h6>
                <p className="card-text">
                  Il mio approccio per spiegare il processo di costruzione del
                  Business Lo stack di intelligence consiste nel comprendere il
                  perché della startup? Che cosa? e come? Con ciò io...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default FeaturedPosts;

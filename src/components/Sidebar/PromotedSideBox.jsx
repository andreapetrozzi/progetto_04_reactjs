import { Card } from "react-bootstrap";

const PromotedSideBox = () => {
  return (
    <>
      <Card id="promoted" className="p-2 mb-4" style={{ borderRadius: "7px" }}>
        <Card.Link className="d-flex flex-row">
          Promosso{" "}
          <i className="d-flex align-self-end bi bi-three-dots ml-auto"></i>
        </Card.Link>
        <div className="d-flex flex-row align-items-center">
          <Card.Img
            src="../images/promoted/grammarly.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Write with confidence</Card.Link>
            <Card.Text className="d-flex flex-row align-items-center">
              Grammarly ti aiuta a scrivere in modo efficace su Gmail e
              LinkedIn. Installa ora!
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="d-flex flex-row align-items-center my-2">
          <Card.Img
            src="../images/promoted/linkedinADS.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Riattiva ora</Card.Link>

            <Card.Text className="d-flex flex-row align-items-center">
              Continua ad imparare il tuo Linkedin. Piano di apprendimento oggi.
              Puoi annullare in qualunque momento.
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="d-flex flex-row align-items-center">
          <Card.Img
            src="../images/promoted/logoLinkedin.png"
            alt="grammarly logo"
          />
          <Card.Body className="p-0 ml-2">
            <Card.Link href="#">Inviti da Linkedin</Card.Link>

            <Card.Text className="d-flex flex-row align-items-center">
              Pubblica annunci su Linkedin. Acquisisci nuovi clienti dalla tua
              attività. Provalo ora.
              <i className="bi bi-chevron-compact-right"></i>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default PromotedSideBox;

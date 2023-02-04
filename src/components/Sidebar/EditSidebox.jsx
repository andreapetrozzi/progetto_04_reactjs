import { Card } from "react-bootstrap";

const EditSidebox = () => {
  return (
    <Card className="mb-3" style={{ borderRadius: "7px" }}>
      <Card.Body className="d-flex flex-column p-3">
        <span className="d-flex flex-row">
          <Card.Link href="#" className="text-gray">
            Modifica profilo pubblico & URL{" "}
          </Card.Link>
          <i id="i" className="bi bi-question-circle-fill ml-auto">
            {" "}
            <span className="hide-show">
              <Card body className="p-0">
                {" "}
                Scopri e modifica il modo in cui ti vedono le persone che non
                hanno effettuato l’accesso e che ti trovano attraverso i motori
                di ricerca (es. Google e Bing).
              </Card>
            </span>
          </i>
        </span>
        <hr />
        <span className="d-flex flex-row">
          <Card.Link href="#" className="mx-0 text-gray">
            Aggiungi il tuo profilo in un’altra lingua
          </Card.Link>
          <i id="i" className="bi bi-question-circle-fill ml-auto">
            {" "}
            <span className="hide-show">
              <Card body className="p-0">
                {" "}
                Con la creazione del profilo in un'altra lingua, professionisti
                e recruiter locali potranno trovarti più facilmente.
              </Card>
            </span>
          </i>
        </span>
      </Card.Body>
    </Card>
  );
};
export default EditSidebox;

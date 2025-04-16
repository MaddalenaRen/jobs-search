import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Job = ({ data, onAddToFavorites }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>

      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={() => onAddToFavorites(data)}
      >
        Aggiungi ai preferiti
      </Button>
    </Col>
  </Row>
);

export default Job;

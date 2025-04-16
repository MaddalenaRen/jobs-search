import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Favorites = () => {
  const preferiti = useSelector((state) => state.favorites);

  const dispatch = useDispatch(); //è un metodo di Redux che lancia un AZIONE(action) che viene catturata dal Redux

  return (
    <Row>
      <Col sm={12}>
        <h2 className="mb-4 text-center p-3">I tuoi annunci preferiti</h2>
        <ul style={{ listStyle: "none, paddingLeft: 0" }}>
          {preferiti.map((preferito, i) => (
            <li
              key={i}
              className="my-3 border p-3 rounded d-flex justify-content-between align-items-center"
              style={{ maxWidth: "1400px", margin: "0 auto" }}
            >
              <div>
                <h5>{preferito.title}</h5>
                <p className="mb-0">{preferito.company_name}</p>
              </div>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_FAVORITES",
                    payload: i,
                  });
                }}
              >
                <FaTrash />
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favorites;

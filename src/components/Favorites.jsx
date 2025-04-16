import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Favorites = () => {
  // BOSS FINALE: il componente Cart deve LEGGERE dallo store e INNESCARE
  // la creazione di nuovi stati (eliminare i libri dal carrello!)

  const preferiti = useSelector((state) => {
    return state.cart.content; // l'array
  });

  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {preferiti.map((preferito, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: i,
                  });
                }}
              >
                <FaTrash />
              </Button>

              {preferito.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row></Row>
    </Row>
  );
};

export default Favorites;

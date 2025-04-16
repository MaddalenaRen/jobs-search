import { Col, Row, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Favorites = () => {
  const preferiti = useSelector((state) => state.favorites);

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
                    type: "REMOVE_FROM_FAVORITES",
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
    </Row>
  );
};

export default Favorites;

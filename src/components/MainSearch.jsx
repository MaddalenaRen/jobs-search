import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setqueryAction, handleSubmitAction } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.jobs.query);
  const jobs = useSelector((state) => state.jobs.jobs);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);

  const handleChange = (e) => {
    dispatch(setqueryAction(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(handleSubmitAction());
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Col xs={10} className="mx-auto mb-3"></Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {isLoading && <Spinner animation="border" variant="primary" />}
          {isError && <p>Si è verificato un errore </p>}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

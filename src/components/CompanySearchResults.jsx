import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtofavorites } from "../redux/actions";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-6 text-center text-md-start">
            Job posting for: {params.company}
          </h1>

          <div className="d-flex justify-content-center justify-content-md-start mb-4">
            <Link to="/Favorites" className="btn btn-warning ">
              ⭐ Vai ai Preferiti ({favorites.length})
            </Link>
          </div>

          {/* Qui cicliamo ogni job individualmente */}
          {jobs.map((jobData) => (
            <div key={jobData._id} className="border p-3 mb-3 rounded bg-light">
              {/* Qui il componente o contenuto del job */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <Job data={jobData} />

                {/* Bottone a destra */}
                <Button
                  variant="outline-primary"
                  onClick={() => dispatch(addtofavorites(jobData))}
                >
                  ⭐ Aggiungi ai preferiti
                </Button>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <div className="not-found wrapper">
        <h1>Sorry</h1>
        <p>That page cannot be found.</p>
        <Link to="/">Back to the homepage...</Link>
      </div>
    </Container>
  );
};

export default NotFound;

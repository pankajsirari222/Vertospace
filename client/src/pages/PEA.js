import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function PEA() {

  function handleClick() {}

  return (
    <div className="PEA">
      <h1 className="text-center mb-3">PEA - Analytical Skills</h1>
      <Row>
        <Col>
          <Card style={{ width: "24rem", marginLeft: "12rem", marginTop:"2rem"}}>
            <Card.Body>
              <Card.Title>PEA 306</Card.Title>
              <Card.Text>This is PEA 306 workbook</Card.Text>
              <Button variant="primary" className="ms-5">
                Preview
              </Button>
              <Link to="http://localhost:8000/file/644520aec78adb8d02730dc1">
              <Button variant="primary" className="mx-5">
                Download File
              </Button>
              </Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on 10/04/2023</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "24rem", marginTop: "2rem", marginLeft:"4rem"}}>
            <Card.Body>
              <Card.Title>PEA 308</Card.Title>
              <Card.Text>This is PEA 308 workbook.</Card.Text>
              <Button variant="primary" className="ms-5">
                Preview
              </Button>
              <Link to="http://localhost:8000/file/644523bac78adb8d02730dc9">
              <Button variant="primary" className="mx-5">
                Download File
              </Button>
              </Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on 10/04/2023</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PEA;

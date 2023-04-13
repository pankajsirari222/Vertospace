import { Card, Button, Row, Col, Container } from "react-bootstrap";

function PEA() {

  function handleClick() {}

  return (
    <>
      <h1 className="text-center my-3">PEA - Analytical Skills</h1>
      <Row>
        <Col>
          <Card style={{ width: "24rem", margin: "4rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>PEA 306</Card.Title>
              <Card.Text>This is PEA 306 workbook</Card.Text>
              <Button variant="primary" className="ms-5">
                Preview
              </Button>
              <Button variant="primary" className="mx-5">
                Download File
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "24rem", margin: "4rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>PEA 308</Card.Title>
              <Card.Text>This is PEA 308 workbook.</Card.Text>
              <Button variant="primary" className="ms-5">
                Preview
              </Button>
              <Button variant="primary" className="mx-5" onClick={handleClick}>
                Download File
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PEA;

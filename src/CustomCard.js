import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

class CustomCard extends React.Component {
  render() {
    return (
      <Card className="mx-9 my-6">
        <CardBody>
          <CardTitle className="text-center display-1 mb-4">
            Christmas
          </CardTitle>
          <Container>
            <Row>
              <Col className="text-center display-4">Days</Col>
              <Col className="text-center display-4">Hours</Col>
              <Col className="text-center display-4">Minutes</Col>
              <Col className="text-center display-4">Seconds</Col>
            </Row>
            <Row>
              <Col className="text-center display-3">12</Col>
              <Col className="text-center display-3">2</Col>
              <Col className="text-center display-3">32</Col>
              <Col className="text-center display-3">52</Col>
            </Row>
          </Container>
          <Row className="justify-content-center">
            <Button className="mx-3 my-2 btn-icon" color="primary">
              <span className="btn-inner--icon">
                <i className="fa fa-desktop" />
              </span>
              <span className="btn-inner--text">Open</span>
            </Button>
            <Button className="mx-3 my-2 btn-icon" color="primary">
              <span className="btn-inner--icon">
                <i className="fa fa-trash" />
              </span>
              <span className="btn-inner--text">Delete</span>
            </Button>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default CustomCard;

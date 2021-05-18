import React from "react";

import CustomModal from "./CustomModal";
import CustomDeleteModal from "./CustomDeleteModal";

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
          <CardTitle className="text-center display-1 ml-7 mb-4">
            Christmas
            <CustomDeleteModal />
            <Button className="btn-icon float-right mr-2" color="secondary">
              <i className="fa fa-desktop" />
            </Button>
          </CardTitle>
          <Container className="mb-4">
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
        </CardBody>
      </Card>
    );
  }
}

export default CustomCard;

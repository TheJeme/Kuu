import React from "react";

import { Container, Row, Col } from "reactstrap";

class FullscreenView extends React.Component {
  render() {
    return (
      <div
        style={{
          transform: "translate(0%, 50%)",
        }}
      >
        <Col className="text-center my-7 display-1">Christmas</Col>
        <Container>
          <Row>
            <Col className="text-center display-3">Days</Col>
            <Col className="text-center display-3">Hours</Col>
            <Col className="text-center display-3">Minutes</Col>
            <Col className="text-center display-3">Seconds</Col>
          </Row>
          <Row>
            <Col className="text-center display-2">12</Col>
            <Col className="text-center display-2">2</Col>
            <Col className="text-center display-2">32</Col>
            <Col className="text-center display-2">52</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FullscreenView;

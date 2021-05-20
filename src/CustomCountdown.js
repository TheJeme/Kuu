import React, { useState, useEffect } from "react";

import timediff from "timediff";
import CustomDeleteModal from "./CustomDeleteModal";

import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function openFullScreen(countdown) {
  window.open("/fullscreen", "_blank");
}

function CustomCountdown(props) {
  const [timeNow, setTimeNow] = useState(Date.now());
  var timedifference = timediff(timeNow, new Date(props.datetime), "DHmS");
  useEffect(() => {
    const interval = setInterval(() => setTimeNow(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Card className="mx-9 my-6 shadow">
      <CardBody>
        <CardTitle className="text-center display-1 mb-4">
          <Button
            className="btn-icon float-left"
            color="secondary"
            onClick={() => {}}
          >
            <i className="fa fa-angle-up" />
          </Button>
          <Button
            className="btn-icon float-left"
            color="secondary"
            onClick={() => {}}
          >
            <i className="fa fa-angle-down" />
          </Button>
          {props.eventName}
          <CustomDeleteModal />
          <Button
            className="btn-icon float-right mr-2"
            color="secondary"
            onClick={(e) => openFullScreen(e.target.value)}
          >
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
            <Col className="text-center display-3">{timedifference.days}</Col>
            <Col className="text-center display-3">{timedifference.hours}</Col>
            <Col className="text-center display-3">
              {timedifference.minutes}
            </Col>
            <Col className="text-center display-3">
              {timedifference.seconds}
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
}

export default CustomCountdown;

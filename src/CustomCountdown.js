import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

function openFullScreen(id, index) {
  window.open(`/${id}/${index}`, "_blank");
}

function CustomCountdown(props) {
  const [timeNow, setTimeNow] = useState(Date.now());
  const { id } = useParams();
  var timedifference = timediff(
    timeNow,
    new Date(
      props.datetime.split(" ")[0],
      props.datetime.split(" ")[1],
      props.datetime.split(" ")[2],
      props.datetime.split(" ")[3],
      props.datetime.split(" ")[4]
    ),
    "DHmS"
  );
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
            onClick={(e) => openFullScreen(id, props.index)}
          >
            <i className="fa fa-desktop" />
          </Button>
          {props.title}
          <CustomDeleteModal id={id} title={props.title} index={props.index} />
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
        <p className="text-center display-5">
          ({props.datetime.split(" ")[2]}.
          {parseInt(props.datetime.split(" ")[1]) + 1}.
          {props.datetime.split(" ")[0]}{" "}
          {props.datetime.split(" ")[3] < 10
            ? "0" + props.datetime.split(" ")[3]
            : props.datetime.split(" ")[3]}
          :
          {props.datetime.split(" ")[4] < 10
            ? "0" + props.datetime.split(" ")[4]
            : props.datetime.split(" ")[4]}
          )
        </p>
      </CardBody>
    </Card>
  );
}

export default CustomCountdown;

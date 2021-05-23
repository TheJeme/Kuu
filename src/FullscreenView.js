import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import firebase from "firebase";

import timediff from "timediff";
import { Container, Row, Col } from "reactstrap";

function FullScreenView() {
  const { id, index } = useParams();
  const [isError, setIsError] = useState(false);
  const [timeNow, setTimeNow] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState(new Date());

  var timedifference = timediff(timeNow, targetDate, "DHmS");

  useEffect(() => {
    var db = firebase.firestore();
    db.collection(id)
      .doc(index.toString())
      .get()
      .then((doc) => {
        setTitle(doc.data().name);
        setTargetDate(
          new Date(
            doc.data().datetime.split(" ")[0],
            doc.data().datetime.split(" ")[1],
            doc.data().datetime.split(" ")[2],
            doc.data().datetime.split(" ")[3],
            doc.data().datetime.split(" ")[4]
          )
        );
      })
      .catch(() => {
        setIsError(true);
      });
  }, [id, index]);

  useEffect(() => {
    const interval = setInterval(() => setTimeNow(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      style={{
        transform: "translate(0%, 50%)",
      }}
    >
      {isError ? (
        <p className="display-3 mt-9 text-center">Error, url is not valid</p>
      ) : (
        <div>
          <Col className="text-center my-7 display-1">{title}</Col>
          <Container>
            <Row>
              <Col className="text-center display-3">Days</Col>
              <Col className="text-center display-3">Hours</Col>
              <Col className="text-center display-3">Minutes</Col>
              <Col className="text-center display-3">Seconds</Col>
            </Row>
            <Row>
              <Col className="text-center display-2">{timedifference.days}</Col>
              <Col className="text-center display-2">
                {timedifference.hours}
              </Col>
              <Col className="text-center display-2">
                {timedifference.minutes}
              </Col>
              <Col className="text-center display-2">
                {timedifference.seconds}
              </Col>
            </Row>
          </Container>
          <p className="text-center display-4 mt-5">
            ({targetDate.getDate()}.{targetDate.getMonth() + 1}.
            {targetDate.getFullYear()}{" "}
            {(targetDate.getHours() < 10 ? "0" : "") + targetDate.getHours()}:
            {(targetDate.getMinutes() < 10 ? "0" : "") +
              targetDate.getMinutes()}
            )
          </p>
        </div>
      )}
    </div>
  );
}

export default FullScreenView;

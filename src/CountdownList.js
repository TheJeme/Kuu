import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";

import CustomCountdown from "./CustomCountdown";

function CountdownList() {
  const [countdowns, setCountdowns] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    var db = firebase.firestore();
    let data = [];
    db.collection(id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id !== "created" && doc.data().deleted !== false) {
            data.push(doc.data());
          }
        });
        setCountdowns(data);
      });
  }, [id]);

  return (
    <div>
      {countdowns.map((countdown) => (
        <CustomCountdown
          key={countdown.index}
          index={countdown.index}
          datetime={countdown.datetime}
          title={countdown.name}
        />
      ))}
    </div>
  );
}

export default CountdownList;

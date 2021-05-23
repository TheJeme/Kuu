import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";

import CustomNavbar from "./CustomNavbar";
import CountdownList from "./CountdownList";
import CustomNewCard from "./CustomNewCard";
import CustomAlert from "./CustomAlert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    var db = firebase.firestore();
    db.collection(id)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setShowAlert(true);
        }
      });
  }, [id]);

  useEffect(() => {});
  return (
    <div>
      <CustomNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {showAlert ? <CustomAlert /> : <div />}
      <CountdownList />
      <CustomNewCard />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import firebase from "firebase";

import uniqid from "uniqid";
import { Button } from "reactstrap";

import CustomNavbar from "./CustomNavbar";

async function createNewTab() {
  const newID = (uniqid() + uniqid()).substr(1, 10);

  const db = firebase.firestore();
  const dataRef = db.collection("data-170300303").doc("data");

  await dataRef.update({
    listcount: firebase.firestore.FieldValue.increment(1),
  });
  window.open(`/${newID}`, "_self");
}

function Source() {
  const [listCount, setListCount] = useState(0);

  useEffect(() => {
    var db = firebase.firestore();
    db.collection("data-170300303")
      .doc("data")
      .get()
      .then((doc) => {
        setListCount(doc.data().listcount);
      });
  }, []);

  return (
    <div>
      <CustomNavbar />

      <div
        style={{
          transform: "translate(0%, 150%)",
        }}
      >
        {" "}
        <p className="display-3 text-center">
          There are already {listCount} personal countdown lists created.
          <br />
          Create your personal list for your countdowns for free.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <Button onClick={() => createNewTab()}>Get Started!</Button>
        </div>
        <p className="display-5 text-center mt-5">
          Brought to you by{" "}
          <a
            href="https://jemedev.netlify.com"
            target="_blank"
            rel="noreferrer"
          >
            Jeme
          </a>
        </p>
      </div>
    </div>
  );
}

export default Source;

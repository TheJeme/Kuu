import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./css/argon-design-system-react.min.css";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./vendor/nucleo/css/nucleo.css";

firebase.initializeApp({
  apiKey: "AIzaSyCjfkD0T5oc9P__eUuAEMpoV2CKH2m36M8",
  authDomain: "jemedev-kuu.firebaseapp.com",
  projectId: "jemedev-kuu",
  storageBucket: "jemedev-kuu.appspot.com",
  messagingSenderId: "120367052757",
  appId: "1:120367052757:web:a45a81d2a9af91e61cef5c",
  measurementId: "G-GE483B6L9S",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

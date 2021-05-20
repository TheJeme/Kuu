import React from "react";
import { useParams } from "react-router-dom";

import { UncontrolledAlert } from "reactstrap";

function CustomAlert() {
  const { id } = useParams();
  return (
    <UncontrolledAlert className="mx-9" color="primary" fade={false}>
      <span className="alert-inner--icon">
        <i className="ni ni-like-2" />
      </span>{" "}
      <span className="alert-inner--text">
        <strong>Succes!</strong> This is your personal site for your own
        countdowns! Your unique id is <strong>{id}</strong>, save this or
        bookmark this page to edit it in the future. DO NOT share this URL,
        instead, click on here to{" "}
        <a className="text-danger" href="/">
          <u>copy link</u>
        </a>{" "}
        for others.
      </span>
    </UncontrolledAlert>
  );
}

export default CustomAlert;

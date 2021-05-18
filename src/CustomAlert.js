import React from "react";

import { UncontrolledAlert } from "reactstrap";

class CustomAlert extends React.Component {
  render() {
    return (
      <UncontrolledAlert className="mx-9" color="primary" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>Succes!</strong> This is your personal site for your own
          countdowns! Your unique id is D5T2W3L9, save this or bookmark this
          page to edit it in the future. DO NOT share this URL, instead, click
          on here to{" "}
          <a className="text-danger" href="/">
            <strong>copy link</strong>
          </a>{" "}
          for others.
        </span>
      </UncontrolledAlert>
    );
  }
}

export default CustomAlert;

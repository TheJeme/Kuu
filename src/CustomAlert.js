import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CopyToClipboard from "react-copy-to-clipboard";

import { UncontrolledAlert, UncontrolledTooltip } from "reactstrap";

function CustomAlert() {
  const { id } = useParams();
  const [state, setState] = useState(false);
  return (
    <UncontrolledAlert className="mx-9" color="primary" fade={false}>
      <span className="alert-inner--icon">
        <i className="ni ni-like-2" />
      </span>{" "}
      <span className="alert-inner--text">
        <strong>Succes!</strong> This is your personal site for your own
        countdowns! Your unique id is <strong>{id}</strong>, save this or
        bookmark this page to visit it in the future.{" "}
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => setState(true)}
        >
          <span
            style={{ cursor: "pointer" }}
            id="linkcopy"
            className="text-danger"
          >
            Copy link
          </span>
        </CopyToClipboard>{" "}
        <UncontrolledTooltip delay={0} trigger="hover focus" target="linkcopy">
          {state ? "Copied succesfully" : "Copy To Clipboard"}
        </UncontrolledTooltip>
      </span>
    </UncontrolledAlert>
  );
}

export default CustomAlert;

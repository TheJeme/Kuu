import React, { useState } from "react";
import firebase from "firebase";

import { Button, Modal } from "reactstrap";

function deleteCountdown(id, index) {
  var db = firebase.firestore();
  db.collection(id)
    .doc(index.toString())
    .delete()
    .then(() => {
      window.location.reload();
    });
}

function CustomDeleteModal(props) {
  const [state, setState] = useState(false);
  return (
    <>
      {/* Button trigger modal */}
      <Button
        className="btn-icon float-right"
        color="secondary"
        type="button"
        onClick={() => setState(!state)}
      >
        <i className="fa fa-trash" />
      </Button>
      {/* Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={state}
        toggle={() => setState(!state)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Delete Countdown
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setState(!state)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to delete the countdown "{props.title}"?
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setState(!state)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => deleteCountdown(props.id, props.index)}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CustomDeleteModal;

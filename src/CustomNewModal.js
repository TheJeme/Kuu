import React, { useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button, Modal, Input } from "reactstrap";

function AddCountdown(id, title, datetime) {
  var cDate = datetime.getDate();
  var cMonth = datetime.getMonth();
  var cYear = datetime.getFullYear();
  var cHour = datetime.getHours();
  var cMinute = datetime.getMinutes();

  var fullDate =
    cYear + " " + cMonth + " " + cDate + " " + cHour + " " + cMinute;
  var db = firebase.firestore();

  db.collection(id)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        db.collection(id)
          .doc("created")
          .set({
            datetime: new Date(),
          })
          .then(() => {});
      }
      db.collection(id)
        .doc(querySnapshot.size.toString())
        .set({
          name: title,
          datetime: fullDate,
          index: querySnapshot.size.toString(),
        })
        .then(() => {
          window.location.reload();
        });
    });
}

function CustomNewModal() {
  const [state, setState] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const { id } = useParams();

  return (
    <>
      {/* Button trigger modal */}
      <Button
        color="primary"
        size="lg"
        type="button"
        onClick={() => setState(!state)}
      >
        Add new Countdown
      </Button>
      {/* Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={state}
        toggle={() => setState(!state)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add new Countdown
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
          <p className="m-1">Date and time</p>
          <DatePicker
            selected={datetime}
            onChange={(date) => setDatetime(date)}
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
          />
          <p className="m-1">Title</p>
          <Input
            type="text"
            placeholder=""
            onChange={(e) => setTitleText(e.target.value)}
          />
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
            onClick={() => AddCountdown(id, titleText, datetime)}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CustomNewModal;

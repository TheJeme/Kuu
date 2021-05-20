import React from "react";

import CustomDateTimePicker from "./CustomDateTimePicker";

import { Button, Modal } from "reactstrap";

class CustomNewModal extends React.Component {
  state = {
    exampleModal: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <Button
          color="primary"
          size="lg"
          type="button"
          onClick={() => this.toggleModal("exampleModal")}
        >
          Add new Countdown
        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
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
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body ml-8">
            <p ClassName="mb-1">Choose date and time</p>
            <CustomDateTimePicker />
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Cancel
            </Button>
            <Button color="primary" type="button" onClick={() => {}}>
              Submit
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default CustomNewModal;

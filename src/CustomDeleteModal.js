import React from "react";

import { Button, Modal } from "reactstrap";

class CustomDeleteModal extends React.Component {
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
          className="btn-icon float-right"
          color="secondary"
          type="button"
          onClick={() => this.toggleModal("exampleModal")}
        >
          <i className="fa fa-trash" />
        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
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
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete the countdown "Christmas"?
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
            <Button color="primary" type="button">
              Delete
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default CustomDeleteModal;

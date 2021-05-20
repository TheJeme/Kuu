import React from "react";

import CustomNewModal from "./CustomNewModal";

import { Card } from "reactstrap";

class CustomNewCard extends React.Component {
  render() {
    return (
      <Card className="mx-9 my-6">
        <CustomNewModal />
      </Card>
    );
  }
}

export default CustomNewCard;

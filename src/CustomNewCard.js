import React from "react";

import { Button, Card } from "reactstrap";

class CustomNewCard extends React.Component {
  render() {
    return (
      <Card className="mx-9 my-6">
        <Button color="primary" size="lg" type="button">
          Add new Countdown
        </Button>
      </Card>
    );
  }
}

export default CustomNewCard;

import CustomNavbar from "./CustomNavbar";

import { Button } from "reactstrap";

function createNewTab() {}

function Source() {
  return (
    <div>
      <CustomNavbar />

      <div
        style={{
          transform: "translate(0%, 300%)",
        }}
      >
        {" "}
        <p className="display-3 text-center">Create new List.</p>
        <div className="d-flex justify-content-center mt-4">
          <Button>Get Started!</Button>
        </div>
      </div>
    </div>
  );
}

export default Source;

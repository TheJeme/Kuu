import uniqid from "uniqid";
import { Button } from "reactstrap";

import CustomNavbar from "./CustomNavbar";

function createNewTab() {
  const newID = (uniqid() + uniqid()).substr(1, 10);
  window.open(`/${newID}`, "_self");
}

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
          <Button onClick={() => createNewTab()}>Get Started!</Button>
        </div>
      </div>
    </div>
  );
}

export default Source;

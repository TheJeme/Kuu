import React from "react";

import { Container, Row, Col } from "reactstrap";

class CustomFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <hr />
            <div className=" copyright">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://jemedev.netlify.com"
                target="_blank"
                rel="noreferrer"
              >
                Jeme
              </a>
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default CustomFooter;

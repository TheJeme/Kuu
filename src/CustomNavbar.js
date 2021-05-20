import React, { useState } from "react";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Input,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function LoadExistingTab(searchText) {
  window.open(`/${searchText}`, "_self");
}

function createNewTab() {}

function CustomNavbar() {
  const [searchText, setSearchText] = useState("");
  return (
    <Navbar
      className="navbar-horizontal navbar-dark bg-primary"
      fixed="top"
      expand="lg"
    >
      <Container>
        <NavbarBrand href="/">Kuu</NavbarBrand>
        <button
          aria-controls="navbar-primary"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-primary"
          data-toggle="collapse"
          id="navbar-primary"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6"></Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-primary"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
            <NavItem>
              <Row>
                <Form className="navbar-form navbar-left" role="search">
                  <Input
                    type="text"
                    placeholder="Load existing"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </Form>
                <Button
                  color="secondary"
                  className="ml-2 mr-5 mb-1"
                  onClick={() => LoadExistingTab(searchText)}
                >
                  <span>Submit</span>
                </Button>
              </Row>
            </NavItem>
            <NavItem>
              <Button color="secondary" onClick={() => createNewTab()}>
                <span>Create new</span>
              </Button>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

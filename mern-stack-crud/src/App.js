// Tuodaan react
import React from "react";

// Tuodaan Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Tuodaan CSS
import "./App.css";

// Tuodaan react-router-domista
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Tuodaan muut react komponentit
import CreateFlavour from "./Components/create-flavour.component";
import EditFlavour from "./Components/edit-flavour.component";
import FlavourList from "./Components/flavour-list.component";

import logo from "../src/Jenny's_Ice_cream_logo_business.png";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar className="navBar">
            <Container>
              <Link to={"/"} className="nav-link">
                <img
                  src={logo}
                  className="App-logo justify-content-center"
                  alt="logo"
                />
              </Link>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/add"} className="nav-link">
                    Create Flavour
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/getall"} className="nav-link">
                    Flavour List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateFlavour />} />
                  <Route path="/add" element={<CreateFlavour />} />
                  <Route path="/update/:Id" element={<EditFlavour />} />
                  <Route path="/delete/:Id" element={<EditFlavour />} />
                  <Route path="/getall" element={<FlavourList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;

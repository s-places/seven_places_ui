/*Main component, that render and 
manage other parts of  SPA.*/
import { React, useState, useEffect } from "react";
import { Container, Row, Col, Nav, Spinner, Button } from "react-bootstrap";
import { Github, InfoCircleFill } from "react-bootstrap-icons";
import ScrollTop from "@nzambello/react-scrolltop";
import "./App.scss";
import Article from "./components/Article";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import NavigationOffcanvas from "./components/NavigationOffcanvas";
import axios from "axios";

//Configurable data source url.
const fetchUrl = "https://splacesapi.herokuapp.com";

//absolute center of screen
const centerOfTheScreen = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

export default function App() {
  /*Setting up variable, that 
  changing visibility of 'Spinner'.*/
  const [isLoading, setIsLoading] = useState(true);

  //Setting up variable for data with main content.
  const [continents, setContinents] = useState({});

  //Setting up state and handler for error page.
  const [hasError, setError] = useState(false);

  //Setting up state and handlers for modal window showing.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Loading data from back-end and switching UI to 'ready/error state'.
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      await setTimeout(1000);
      const response = await axios.get(fetchUrl);
      return response;
    };
    fetchData()
      .then((response) => {
        setContinents(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [hasError]);

  //When data loading in progress spinner will be showen, until full complete or error page be showen.
  return hasError ? (
    <div>
      <ErrorPage error />
    </div>
  ) : isLoading ? (
    <div style={centerOfTheScreen}>
      <Button bg="transperent" variant="dark" disabled>
        <Spinner style={{ width: "3rem", height: "3rem" }} animation="border" />
        <h3>Loading...</h3>
      </Button>
    </div>
  ) : (
    <div className="app">
      <Container fluid>
        <Row>
          <Col style={{ marginBottom: "0.2rem" }} xs={10}>
            <NavigationOffcanvas continents={continents} />
          </Col>
          <Col xs={2}>
            <Nav className=" justify-content-end">
              <Col md={4}>
                <Button
                  as="span"
                  onClick={() => {
                    window.location.href = "https://github.com/s-places";
                  }}
                  variant="link"
                >
                  <Github color="white" size={42} />
                </Button>
              </Col>
              <Col md={4}>
                <Button as="span" variant="link">
                  <InfoCircleFill
                    onClick={() => handleShow()}
                    color="white"
                    size={42}
                  />
                </Button>
              </Col>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Article continents={continents} key={1} />
          </Col>
        </Row>
        <ScrollTop />
        <InfoModal show={show} close={handleClose} />
      </Container>
    </div>
  );
}

//Component of SPA that render navigation menu.
import { React, useState } from "react";
import { Offcanvas, Button, Nav, Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
//Alternate scroll for some mobile browsers (if bootstrap Nav.Link don't work correctly)
import Scroll from "react-scroll-to-element";

export default function NavigationOffcanvas({ continents, ...props }) {
  //Setting up state and handlers for switching menu showing.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Building of menu items list from data from props.
  const menu = continents.map((item) => (
    <Nav.Item key={item.name}>
      <Nav.Link style={{ fontSize: "1.5rem" }} href={`#${item.name}`}>
        <Scroll type="id" element={item.name}>
          <b>{item.name}</b>
        </Scroll>
      </Nav.Link>
    </Nav.Item>
  ));

  return (
    <>
      <nav>
        <div style={{ fontSize: "2rem", color: "white" }}>
          <Button className="stiky-top" variant="dark" onClick={handleShow}>
            <List color="white" size={46} />
          </Button>
          <b>Seven places of the world</b>
        </div>
        <Offcanvas
          style={{ backgroundColor: "#212529", width: "max-content" }}
          scroll={true}
          backdrop={false}
          show={show}
          restoreFocus={false}
          onHide={handleClose}
          {...props}
        >
          <Offcanvas.Header
            className="align-self-end"
            style={{ fontSize: "1.25rem"}}
            closeButton
            closeVariant="white"
          />
          <hr />
          <Offcanvas.Body>
            <Navbar
              className=" justify-content-end"
              expand={true}
              variant="dark"
              bg="transperent"
            >
              <Nav className="flex-column" defaultActiveKey="/">
                {menu}
              </Nav>
            </Navbar>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    </>
  );
}

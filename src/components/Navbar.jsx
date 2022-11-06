import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../img/logo.png";
import "../Styles/Navbaros.css";

const Navbaros = () => {
  return (
    <Navbar
      variant="dark"
      className="fixed-top bg_black justify-content-evenly"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="30"></img>
        </Navbar.Brand>
        <Nav className="test d-flex justify-content-evenly">
          <Nav.Link href="#home" className="El">
            Home <hr />
          </Nav.Link>
          <Nav.Link href="#works" className="El">
            Works
            <hr />
          </Nav.Link>
          <Nav.Link href="#socials" className="El">
            Socials
            <hr />
          </Nav.Link>
          <Nav.Link href="#contact" className="El">
            Contact
            <hr />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbaros;

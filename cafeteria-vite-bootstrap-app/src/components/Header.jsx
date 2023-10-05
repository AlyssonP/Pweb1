import { Container, Navbar, Nav } from "react-bootstrap"

import "./Header.css";

const Header = () => {
  let theme = "dark"
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" bg={theme} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand href="#">Cafeteria Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navabar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cardapio">Cardapio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
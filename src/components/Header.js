import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  let navigate = useNavigate();

  return (
    <Navbar bg="#6a7466" data-bs-theme="dark" id="header">
      <Container>
        <Navbar.Brand href="/">Shoe Market</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>

          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
        {/* <Link to={"./detail"}>Detail</Link>
                    <Nav.Link href="./detail" style={{ color: "white" }}>
                        Detail2
                    </Nav.Link> */}
      </Container>
    </Navbar>
  );
};

export default Header;

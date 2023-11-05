import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigBar() {
  return (
    <div>
    <Navbar bg="warning" variant="dark" >
      <Container>
        <Navbar.Brand href="/navpage"><h1>NavBar</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home"><h2>Home</h2></Nav.Link>
          <Nav.Link href="/features"><h2>Features</h2></Nav.Link>
          <Nav.Link href="/pricing"><h2>Pricing</h2></Nav.Link>
          <Nav.Link href="/calcpage"><h2>Calculate</h2></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
);
}
export default NavigBar;
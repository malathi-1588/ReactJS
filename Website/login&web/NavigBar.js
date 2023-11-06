import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
function NavigBar() {
  return (
    <div>
    <Navbar bg="success" variant="light" className='Nav1' >
      <Container>
        <Navbar.Brand href="/navpage"><h1>NavBar</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home"><h2>Home</h2></Nav.Link>
          <Nav.Link href="/features"><h2>Features</h2></Nav.Link>
          <Nav.Link href="/pricing"><h2>Pricing</h2></Nav.Link>
          <Nav.Link href="/calcpage"><h2>Calculate</h2></Nav.Link>
          <div className='log'>
          <Nav.Link href="/LoginPage"><h2>Login</h2></Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
    </div>
);
}
export default NavigBar;
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import "./Navbar.css";


function NavigBar() {
  return (
    <div>
    <Navbar className='Nav1' style={{backgroundColor:'lightblue'}}>
      <div>
        <img src="./mylogo.jpg" alt='hi' style={{width:100}}></img>
      </div>
      <Container>
        <Navbar.Brand href="/navpage"><h1>NavBar</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home"><h3>Home</h3></Nav.Link>
          <Nav.Link href="/features"><h3>Features</h3></Nav.Link>
          <Nav.Link href="/pricing"><h3>Dropdown Search</h3></Nav.Link>
          <Nav.Link href="/calcpage"><h3>Calculate</h3></Nav.Link>

          <NavDropdown fontWeight='10' title = 'Dropdown' id="collapsible-nav-dropdown" style={{fontSize:'25px', fontWeight:'bold'}}>
              <NavDropdown.Item href="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          <div className='log'>
          <Nav.Link href="/LoginPage"><h3>Login</h3></Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
    </div>
);
}
export default NavigBar;
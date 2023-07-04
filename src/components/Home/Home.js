import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import classes from './Home.module.css';
import { authActions } from '../../store/auth';
import { useDispatch  } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(authActions.logout())
    history.push('/')
  }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Welcome To Your Mail Box</Navbar.Brand>
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          <Button style={{background:'teal'}} onClick={logoutHandler}>Logout</Button>
        </Container>
      </Navbar>
    )
};

export default Home;
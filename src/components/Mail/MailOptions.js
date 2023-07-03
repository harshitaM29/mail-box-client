import { Container, Row, Col, Button, ListGroup, Nav, Offcanvas} from 'react-bootstrap';
import classes from './MailOptions.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const MailOptions = (props) => {
    
   const history = useHistory();
    const handleClick = () => {
        history.replace('/edit')
    }
    return (
        <Container className={classes.mailOptions}>
        <div>
        <Button onClick={handleClick}>Compose</Button>
        </div>
       <div className={classes.optionRow}>

      
        <Nav className="col-md-10 d-none d-md-block bg-light sidebar"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link><NavLink to='/inbox' style={ ({ 
                       textDecoration: 'none',})}>Inbox</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <NavLink to='/sent'style={ ({ 
                       textDecoration: 'none',})}>Sent</NavLink></Nav.Link>
            </Nav.Item>
            </Nav>
           

        </div>
    
 
        </Container>
    )
};

export default MailOptions;
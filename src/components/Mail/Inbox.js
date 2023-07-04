import { Card, Button, Nav, Col, Row, Container, ListGroup, } from "react-bootstrap";
import { useSelector  } from "react-redux";
const Inbox = () => {
  const receivedMail = useSelector(state => state.mailReceive.receivedMail)
return(
  

<Container style={{marginTop:'1rem'}}>   
       <ListGroup>
       {receivedMail.map((item) => <ListGroup.Item>From:{item.from} {item.text}</ListGroup.Item> )}
       </ListGroup>
       </Container>     

    
)

};

export default Inbox;
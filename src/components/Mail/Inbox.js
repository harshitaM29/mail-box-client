import { Card, Button, Nav, Col, Row, Container, } from "react-bootstrap";
import MailOptions from "./MailOptions";
const Inbox = () => {
return(
  

  <Card style={{ width: '70rem', height:'auto'}}>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

    
)

};

export default Inbox;
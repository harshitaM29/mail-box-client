import { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import { useLocation } from 'react-router-dom'

const ViewMail = () => {
  const location = useLocation();
  console.log(location.params)
 const data = location.params || []
 
    return (
    <Container  style={{marginTop:'1rem'}}>
        <div>{data.subject}</div>
        <Card>
            <Card.Body>To:{data.to.split('@')[0]}</Card.Body>
            <Card.Body>{data.text}</Card.Body>
        </Card>
        </Container>
    )

};

export default ViewMail
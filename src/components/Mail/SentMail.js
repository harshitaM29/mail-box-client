import { Container, ListGroup } from "react-bootstrap";
import MailBody from "./MailBody";
import {useSelector } from 'react-redux'

const SentMail = () => {
    const mails = useSelector(state => state.mail.mail)
    console.log(mails)
    return(
       <Container style={{marginTop:'1rem'}}>
        <ListGroup style={{border:'none'}}>
          {mails.map((item) => <ListGroup.Item>To:{item.to.split('@')[0]} {item.subject}-{item.text}</ListGroup.Item>)}   
        </ListGroup>
        </Container>
    )

};

export default SentMail;
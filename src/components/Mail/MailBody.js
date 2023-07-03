import { Card } from "react-bootstrap";
import SentMail from "./SentMail";
import classes from './MailBody.module.css'

const MailBody = (props) => {
return(
    <Card>
       <Card.Body>
     <SentMail />
        </Card.Body> 
    </Card>
)
};

export default MailBody;
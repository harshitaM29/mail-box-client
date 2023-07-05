import { Card, Button, Nav, Col, Row, Container, ListGroup, } from "react-bootstrap";
import { useSelector  } from "react-redux";
import InboxDetails from "./InboxDetails";
const Inbox = (props) => {
  const receivedMail = useSelector(state => state.mailReceive.receivedMail)
  console.log(props)
return(
  <li>
  <InboxDetails key={props.id} id={props.id} to={props.to} from={props.from} subject={props.subject} text={props.text}
  isRead={props.isRead}/>
  
</li>
      
)

};

export default Inbox;

import { Card, Button, Nav, Col, Row, Container, ListGroup, } from "react-bootstrap";
import { useSelector  } from "react-redux";
import Inbox from "../Inbox/Inbox";
import classes from './InboxList.module.css'
const InboxList = () => {
  const receivedMail = useSelector(state => state.mailReceive.receivedMail)
return(
  

<Card style={{marginTop:'1rem'}}  className={classes.list}>   
       <ul>
       {receivedMail.map((item) => <Inbox id={item.id} to={item.to} from={item.from} text={item.text} subject={item.subject} isRead={item.isRead}>

       </Inbox> )}
       </ul>
       </Card>     

) 

};

export default InboxList;
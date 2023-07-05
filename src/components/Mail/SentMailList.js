import { Card } from "react-bootstrap";
import {useSelector } from 'react-redux'
import classes from './InboxList.module.css';
import SentMail from "../SentMail/SentMail";
const SentMailList = () => {
    const mails = useSelector(state => state.mail.mail)
    console.log(mails)
    return(
      <Card style={{marginTop:'1rem'}}  className={classes.list}>   
       <ul>
       {mails.map((item) => <SentMail id={item.id} to={item.to} from={item.from} text={item.text} subject={item.subject} isRead={item.isRead}>

       </SentMail> )}
       </ul>
       </Card>   
    )

};

export default SentMailList;
import InboxDetails from "./InboxDetails";
const Inbox = (props) => {
return(
  <li>
  <InboxDetails key={props.id} id={props.id} to={props.to} from={props.from} subject={props.subject} text={props.text}
  isRead={props.isRead}/>
  
</li>
      
)

};

export default Inbox;
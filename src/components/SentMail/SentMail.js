import SentMailDetails from "./SentMailDetails";
const SentMail = (props) => {
    return (
        <li>
            <SentMailDetails key={props.id} id={props.id} to={props.to} from={props.from} subject={props.subject} text={props.text}
  isRead={props.isRead}/>
        </li>
    )

};

export default SentMail;
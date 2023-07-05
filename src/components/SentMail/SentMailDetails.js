import classes from './SentMailDetails.module.css';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom'

const SentMailDetails = props => {
    const history = useHistory();
    const listClickHandler = () => {
        history.replace({pathname:'/viewsentmail',params:props})
       
    }
    return (
        <Fragment>
        
       
        <div className={classes.description}>
         <p  onClick={listClickHandler}>To: {props.to.split('@')[0]}</p>
            <p>{props.subject}</p>
            
            <p >{props.text}</p>
        </div>
       

            </Fragment>
    )
}

export default SentMailDetails;
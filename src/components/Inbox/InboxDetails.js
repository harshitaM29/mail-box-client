import { Badge } from 'react-bootstrap';
import classes from './InboxDetails.module.css'
import { Fragment, useState } from 'react';
import { mailReceivedActions } from '../../store/mailReceived';
import { mailActions } from '../../store/mail';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
const InboxDetails = props=> {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const listClickHandler = () => {
        dispatch(mailReceivedActions.editReceivedMail(props))
        history.replace({pathname:'/viewmail',params:props})
       
    }
    const deleteHandler = () => {
        dispatch(mailReceivedActions.deleteReceivedMails(props.id))
    }
    return (

        <Fragment>
        
       
        <div className={classes.description} style={{fontWeight:!props.isRead ? 'bold' : 'normal'}}>
        {!props.isRead && <button></button> }
         <p  onClick={listClickHandler}>{props.from}</p>
            <p>{props.subject}</p>
            
            <p >{props.text}</p>
        <div className={classes.action}>
        <button onClick={deleteHandler}>Delete</button> 
        </div>  
        </div>
       

            </Fragment>
      
    )

};

export default InboxDetails;
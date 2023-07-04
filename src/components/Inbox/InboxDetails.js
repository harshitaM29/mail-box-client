import { Badge } from 'react-bootstrap';
import classes from './InboxDetails.module.css'
import { Fragment, useState } from 'react';
import { mailReceivedActions } from '../../store/mailReceived';
import { useDispatch, useSelector } from 'react-redux';
const InboxDetails = props=> {
    
    const dispatch = useDispatch();
    const listClickHandler = () => {
        dispatch(mailReceivedActions.editReceivedMail(props))
    }
    return (

        <Fragment>
        
       
        <div className={classes.description} style={{fontWeight:!props.isRead ? 'bold' : 'normal'}} onClick={listClickHandler}>
        {!props.isRead && <button></button> }
         <p>{props.from}</p>
            <p>{props.subject}</p>
            
            <p >{props.text}</p>
           
          
        </div>
       

            </Fragment>
      
    )

};

export default InboxDetails;
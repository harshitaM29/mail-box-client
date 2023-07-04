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
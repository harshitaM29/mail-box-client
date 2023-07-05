import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import classes from './MailEditor.module.css'
import { useState } from "react";
import { mailActions } from "../../store/mail";
import { mailReceivedActions } from "../../store/mailReceived";
import { useSelector, useDispatch } from 'react-redux';


const MailEditor = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const dispatch = useDispatch();
    const emailId= localStorage.getItem("email")
    const updateEmail= (e) => {
        setEnteredEmail(e.target.value);
    }
    const updateSubject = (e) => {
        setEnteredSubject(e.target.value)
    }
    const updateText = (e) => {
    e.blocks.forEach((item) =>setEnteredText(item.text)
    )
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const mailInput = {
            id:Math.random().toString(),
            from:emailId,
            to:enteredEmail,
            subject:enteredSubject,
            text:enteredText,
            isRead:false
        };
        dispatch(mailActions.sent(mailInput))
        dispatch(mailReceivedActions.addToRecivedMail(mailInput))
        
    }
        return (
    <div  className={classes.form} style={{ display: 'block', position: 'initial' }}>
        
    <Form onSubmit={formSubmitHandler} >
         <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={1}>
          To:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" value={enteredEmail} onChange={updateEmail} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={1}>
          Subject:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" value={enteredSubject} onChange={updateSubject}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
        <Col sm={10} style={{height:'20rem'}}>
        <Editor
         value={enteredText}
       
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         style={{innerHeight:'2rem'}}
            onChange={updateText}
         />
        </Col>
      </Form.Group>
      <Button type="submit">Send</Button>
      <Button className={classes.cancelBtn}>Cancel</Button>

    </Form>
    </div>
    )

}

export default MailEditor
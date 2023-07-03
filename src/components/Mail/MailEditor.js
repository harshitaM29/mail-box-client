import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import classes from './MailEditor.module.css'
import { useState } from "react";


const MailEditor = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredText, setEnteredText] = useState('');

    const updateEmail= (e) => {
        setEnteredEmail(e.target.value);
    }
    const updateSubject = (e) => {
        setEnteredSubject(e.target.value)
    }
    const updateText = (e) => {
        setEnteredText(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const mailInput = {
            to:enteredEmail,
            subject:enteredSubject,
            text:enteredText
        };
        console.log(mailInput)
    }
        return (
    <div  style={{ display: 'block', position: 'initial' }}>
        
    <Form onSubmit={formSubmitHandler}>
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
          <Form.Control type="email" value={enteredSubject} onChange={updateSubject}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
        <Col sm={10} style={{height:'20rem'}}>
        <Editor
         editorState={enteredText}
       
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         style={{innerHeight:'2rem'}}
            onEditorStateChange={updateText}
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
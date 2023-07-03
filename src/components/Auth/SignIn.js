import classes from './SignIn.module.css';
import { useRef, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../store/auth';
import { useDispatch } from 'react-redux'
const SignIn = props => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const switchAuthModeHandler = () => {
        history.push('/signup')
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enterdPassword = passwordInputRef.current.value;

        const signInData = {
            email:enteredEmail,
            password:enterdPassword,
            returnSecureToken: true
        }
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQ43RdKa47hI5qOMs9KmnZgRpowXMg3CA', {
          method: 'POST',
          body:JSON.stringify(signInData),
          headers: {
            'Content-Type' : 'application/json'
          }
  
        }).then(res => {
          setIsLoading(false)
          if(res.ok) {
            res.json().then(data => {
                dispatch(authActions.login(data))
              history.replace('/home')
              
            });
           
          } else {
            res.json().then(data => {
              alert(data.error.message)
              })
          }
        })
  
    }
    return (
        <section className={classes.auth}>
        <h2>Sign In</h2>
        <Form onSubmit={submitHandler}>
        <Form.Group className={classes.control} controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} required/>
        </Form.Group>
        <Form.Group className={classes.control} controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} required/>
        </Form.Group>
        <div className={classes.actions}>
        {isLoading && <p>Sending Request...</p>}
        {!isLoading && <Button type="submit">Login</Button> }
        <button 
        className={classes.toggle}
        type='button'
        onClick={switchAuthModeHandler}
        >
            Create new account</button>
        </div>
      </Form>
      </section>
    )
};

export default SignIn;
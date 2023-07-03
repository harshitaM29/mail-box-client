import { Button, Form } from "react-bootstrap";
import classes from './SignUp.module.css'
import { useRef, useState } from "react";

const SignUp = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;

        const signUpData = {
            email:enteredEmail,
            password:enteredConfirmPassword,
            returnSecureToken: true
        }

        setIsLoading(true);

        if(enteredConfirmPassword !== enteredPassword) {
            alert('Pasword mismatch');
            setIsLoading(false);
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQ43RdKa47hI5qOMs9KmnZgRpowXMg3CA', {
          method:'POST',
          body:JSON.stringify(signUpData),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          setIsLoading(false);
          if(res.ok) {
           console.log('user created sucessfully')
          } else{
            res.json().then(data => {
            alert(data.error.message)
            })
          }
        })
        }

    }
return(
    <section className={classes.auth}>
    <h2>Sign Up</h2>
    <Form onSubmit={submitHandler}>
    <Form.Group className={classes.control} controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} required/>
    </Form.Group>
    <Form.Group className={classes.control} controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={passwordInputRef} required/>
    </Form.Group>
    <Form.Group className={classes.control} controlId="formGroupConfirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" ref={confirmPasswordInputRef} required/>
    </Form.Group>
    <div className={classes.actions}>
    {isLoading && <p>Sending Request...</p>}
    {!isLoading && <Button type="submit">Create Account</Button>}
    <Button className={classes.toggle}>Login with existing account</Button>
    </div>
  </Form>
  </section>
)
};

export default SignUp
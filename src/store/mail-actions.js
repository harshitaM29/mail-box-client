import { mailActions } from "./mail";
import { useSelector  } from "react-redux";

const email = localStorage.getItem('email');



export const receivedMail = () => {
 
    return async(dispatch) => {
        const fetchData = async() => {
            let emailId = ''
            if(email !== null) {
                emailId = email.split('@')[0];
            }
            const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com/mailSent${emailId}.json`);
            if(!response.ok) {
                throw new Error('Could not fetch data')
            };
            const data = await response.json();
            return data;
        }

            try {
             const mailData = await fetchData();
             console.log('receive',mailData)
             dispatch(mailActions.replaceMail({
                mail: mailData.mail || [],
             }))
            } catch (error) {
                console.log(error)
            
        };
    };
}

export const sendMail = (mailInput) => {
    return async() => {
       
        let emailId = ''
        if(email !== null) {
            emailId = email.split('@')[0];
        }
            const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com/mailSent${emailId}.json`,{
                method: 'PUT',
                body:JSON.stringify({
                  mail:mailInput.mail

                })
            })
            if(!response.ok) {
                throw new Error('Request failed');
            }
        
    }
}
import { mailActions } from "./mail";

const email = localStorage.getItem('email');
const emailId = email.split('@')[0];

export const sendMail = (mailInput) => {
   
    return async() => {
       
            const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com//mail${emailId}.json`,{
                method: 'PUT',
                body:JSON.stringify({
                    from:mailInput.from,
                    to:mailInput.to,
                    subject:mailInput.subject,
                    text:mailInput.text

                })
            })
            if(!response.ok) {
                throw new Error('Request failed');
            }
        
    }
}
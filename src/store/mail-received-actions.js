import { mailReceivedActions } from "./mailReceived";


export const fetchReceivedMails = () => {
    const email = localStorage.getItem('email');
    let emailId = '';
   if(email !== null) {
    emailId = email.split('@')[0];
   }

return async(dispatch) => {
    const fetchData = async() => {
        const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com/mailReceive${emailId}.json`);
        if(!response.ok) {
            throw new Error('Could not fetch data')
        };
        const data = await response.json();
        return data;
    }

        try {
         const mailData = await fetchData();
         console.log(mailData)
         dispatch(mailReceivedActions.replaceRecivedMail({
            receivedMail: mailData.mail || [],
         }))
        } catch (error) {
            console.log(error)
        
    };
};

}

export const receivedMails = (mailInput) => {
    const email = localStorage.getItem('email');
    let emailId = '';
    if(email !== null) {
        emailId = email.split('@')[0];
    }
return async() => {

    const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com/mailReceive${emailId}.json`,{
        method: 'PUT',
        body:JSON.stringify({
          mail:mailInput.receivedFromSender

        })
    })
    if(!response.ok) {
        throw new Error('Request failed');
    }
  
}
}

export const sendToReceiver = (mailInput) => {
   
    let email = '';
    mailInput.receivedMail.forEach((item) => email = item.to.split('@')[0])
    return async() => {

        const response = await fetch(`https://mail-box-client-8e62b-default-rtdb.firebaseio.com/mailReceive${email}.json`,{
            method: 'PUT',
            body:JSON.stringify({
              mail:mailInput.receivedMail

            })
        })
        if(!response.ok) {
            throw new Error('Request failed');
        }
      
    }
}
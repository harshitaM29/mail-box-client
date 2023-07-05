import { Route, Switch} from 'react-router-dom'
import SignUp from "./components/Auth/SignUp";
import SignIn from './components/Auth/SignIn';
import HomePage from './pages/HomePage';
import { sendMail, receivedMail } from './store/mail-actions';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import SentMail from './components/Mail/SentMailList';
import InboxList from './components/Mail/InboxList';
import MainLayout from './components/Layout/MainLayout';
import MailEditor from './components/Mail/MailEditor';
import { sendToReceiver, fetchReceivedMails, receivedMails } from './store/mail-received-actions';
import ViewMail from './components/Inbox/ViewMail';
import ViewSentMail from './components/SentMail/ViewSentMail';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const mails = useSelector(state => state.mail)
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  const receiveMail = useSelector(state => state.mailReceive)

  
  useEffect(() => {
    if(isLogin) {
    dispatch(receivedMail())
    dispatch(fetchReceivedMails())
    }
  },[ dispatch, isLogin])

useEffect(() => {
 dispatch(receivedMails(receiveMail))

},[receiveMail,dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    if(isLogin) {
    dispatch(sendMail(mails))
    dispatch(sendToReceiver(receiveMail))
    }
  },[mails,receiveMail,dispatch, isLogin])

  return (
    <Fragment>
  
   <Switch>
    <Route path='/' exact>
      <SignIn />
    </Route>
    <Route path='/signup'>
      <SignUp />
    </Route>
    {isLogin && <MainLayout> 
    <Route path='/home'>
      <HomePage />
    </Route>
  <Route path='/sent'>
    <SentMail />
  </Route>
  <Route path='/edit'>
    <MailEditor />
  </Route>
  <Route path='/inbox'>
    <InboxList />
  </Route>
  <Route path='/viewmail'>
    <ViewMail />
    </Route>
    <Route path='/viewsentmail'>
      <ViewSentMail />
    </Route>
  </MainLayout> }
   </Switch>
  
   </Fragment>
  );
}

export default App;

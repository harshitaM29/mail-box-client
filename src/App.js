import { Route, Switch} from 'react-router-dom'
import SignUp from "./components/Auth/SignUp";
import SignIn from './components/Auth/SignIn';
import HomePage from './pages/HomePage';
import { sendMail, receivedMail } from './store/mail-actions';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import SentMail from './components/Mail/SentMail';
import InboxList from './components/Mail/InboxList';
import MainLayout from './components/Layout/MainLayout';
import MailEditor from './components/Mail/MailEditor';
import { sendToReceiver, fetchReceivedMails, receivedMails } from './store/mail-received-actions';
import { mailReadAction } from './store/mailRead';
import { mailActions } from './store/mail';
import ViewMail from './components/Inbox/ViewMail';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const mails = useSelector(state => state.mail)
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  const receiveMail = useSelector(state => state.mailReceive)
  const count = useSelector(state => state.mailReceive.count)
  
  useEffect(() => {
    if(isLogin) {
    dispatch(receivedMail())
    dispatch(fetchReceivedMails())
    dispatch(mailReadAction.increaseCount(count))
    }
  },[receivedMail,fetchReceivedMails])
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
    dispatch(sendToReceiver(mails))
    }
  },[mails,receiveMail,dispatch])

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
  </MainLayout> }
   </Switch>
  
   </Fragment>
  );
}

export default App;

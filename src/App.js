import { Route, Switch} from 'react-router-dom'
import SignUp from "./components/Auth/SignUp";
import SignIn from './components/Auth/SignIn';
import HomePage from './pages/HomePage';
import { sendMail, receivedMail } from './store/mail-actions';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import SentMail from './components/Mail/SentMail';
import Inbox from './components/Mail/Inbox';
import MainLayout from './components/Layout/MainLayout';
import MailEditor from './components/Mail/MailEditor';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const mails = useSelector(state => state.mail)
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  useEffect(() => {
    dispatch(receivedMail())
  },[receivedMail])
  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendMail(mails))
    
  },[mails,dispatch])
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
    <Inbox />
  </Route>
  </MainLayout> }
   </Switch>
  
   </Fragment>
  );
}

export default App;

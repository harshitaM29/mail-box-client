import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import mailReducer from './mail';
import mailReceivedReducer from './mailReceived';

const store = configureStore({
    reducer: {auth:authReducer, mail:mailReducer, mailReceive:mailReceivedReducer}
});

export default store;
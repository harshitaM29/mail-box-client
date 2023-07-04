import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import mailReducer from './mail';
import mailReceivedReducer from './mailReceived';
import mailReadReducer from './mailRead'

const store = configureStore({
    reducer: {auth:authReducer, mail:mailReducer, mailReceive:mailReceivedReducer, mailRead:mailReadReducer}
});

export default store;
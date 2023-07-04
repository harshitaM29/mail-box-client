import { createSlice } from '@reduxjs/toolkit';
import { receivedMail } from './mail-actions';

const initialMailReceivedState = {receivedMail:[],count:0}

const mailReceivedSlice = createSlice({
    name:'receivedMail',
    initialState:initialMailReceivedState,
    reducers : {
        replaceRecivedMail(state,action) {
            state.receivedMail = action.payload.mail;
            state.count = state.receivedMail.length

        },
        editReceivedMail(state,action) {
            // console.log(state.receivedMail)
            const index =  state.receivedMail.findIndex(item => item.id === action.payload.id)
            state.receivedMail[index].isRead = true
            state.count--;
        } 
        }
    
});

export const mailReceivedActions = mailReceivedSlice.actions;

export default mailReceivedSlice.reducer;
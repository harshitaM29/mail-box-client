import { createSlice } from '@reduxjs/toolkit';
import { receivedMail } from './mail-actions';

const initialMailReceivedState = {receivedMail:[],receivedFromSender:[],count:0}

const mailReceivedSlice = createSlice({
    name:'receivedMail',
    initialState:initialMailReceivedState,
    reducers : {
        replaceRecivedMail(state,action) {
            state.receivedFromSender = action.payload.mail;
            state.count = state.receivedFromSender.length

        },
        addToRecivedMail(state,action) {
            state.receivedMail.push({
                ...action.payload
            })
        },
        editReceivedMail(state,action) {
            // console.log(state.receivedMail)
            const index =  state.receivedFromSender.findIndex(item => item.id === action.payload.id)
            state.receivedFromSender[index].isRead = true
            state.count--;
        },
        deleteReceivedMails(state,action) {
            console.log(action.payload)
            state.receivedFromSender = state.receivedFromSender.filter(item => item.id !== action.payload)
        } 
        }
    
});

export const mailReceivedActions = mailReceivedSlice.actions;

export default mailReceivedSlice.reducer;
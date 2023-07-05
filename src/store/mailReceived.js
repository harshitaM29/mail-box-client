import { createSlice } from '@reduxjs/toolkit';

const initialMailReceivedState = {receivedMail:[],receivedFromSender:[],count:0}

const mailReceivedSlice = createSlice({
    name:'receivedMail',
    initialState:initialMailReceivedState,
    reducers : {
        replaceRecivedMail(state,action) {
            state.receivedFromSender = action.payload.receivedMail;
            state.count = state.receivedFromSender.length

        },
        addToRecivedMail(state,action) {
            state.receivedMail.push({
                ...action.payload
            })
        },
        editReceivedMail(state,action) {
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
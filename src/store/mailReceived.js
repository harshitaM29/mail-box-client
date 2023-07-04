import { createSlice } from '@reduxjs/toolkit';

const initialMailReceivedState = {receivedMail:[]}

const mailReceivedSlice = createSlice({
    name:'receivedMail',
    initialState:initialMailReceivedState,
    reducers : {
        replaceRecivedMail(state,action) {
            state.receivedMail = action.payload.mail;

        },
        editReceivedMail(state,action) {
            console.log(action.payload)
            const index =  state.receivedMail.findIndex(item => item.id === action.payload.id)
            state.receivedMail[index].isRead = true
        } 
        }
    
});

export const mailReceivedActions = mailReceivedSlice.actions;

export default mailReceivedSlice.reducer;
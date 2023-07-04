import { createSlice } from '@reduxjs/toolkit';

const initialMailState = {mail:[]}

const mailSlice = createSlice({
    name:'mail',
    initialState:initialMailState,
    reducers:{
        replaceMail(state,action) {
            state.mail = action.payload.mail;
          
        },
        sent(state, action) {
            state.mail.push({
                ...action.payload
            })
        },
      
        
    }
})

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
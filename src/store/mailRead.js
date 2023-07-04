import { createSlice } from "@reduxjs/toolkit";

const mailReadSlice = createSlice({
    name:'mailRead',
    initialState: {
        count: 0,
        isClick: false
    },
    reducers : {
        increaseCount(state,action) {
            state.count++
        }
        
    }
});

export const mailReadAction = mailReadSlice.actions;

export default mailReadSlice.reducer;
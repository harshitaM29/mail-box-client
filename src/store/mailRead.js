import { createSlice } from "@reduxjs/toolkit";
import { useSelector  } from "react-redux";

const mailReadSlice = createSlice({
    name:'mailRead',
    initialState: {
        count: 0,
        isClick: false
    },
    reducers : {
        increaseCount(state,action) {
            state.count = action.payload
        },
        decreaseCount(state) {
            state.count--;
        }

    }
});

export const mailReadAction = mailReadSlice.actions;

export default mailReadSlice.reducer;
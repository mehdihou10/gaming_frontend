import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
    initialState: '',
    name: 'resultsSlice',
    reducers: {

        addResult: (state,action)=>{
            return action.payload
        }
    }
})

export const {addResult} = resultsSlice.actions;
export default resultsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const backgroundslice = createSlice({
    name:'slice',
    initialState:{color:'white'},
    reducers:{
        changeBackground:(state,action)=>{
            state.color=action.payload
        }
    }

})
export const {changeBackground} = backgroundslice.actions
export default backgroundslice.reducer
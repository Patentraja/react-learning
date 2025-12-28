import { createSlice } from "@reduxjs/toolkit";

const cs = createSlice({
    name: 'counter',
    initialState:{value:0, count:0},
    reducers:{
        increment: state=> { state.value += 1},
        decrement: state=> { state.value -= 1},
        twotable: state=> { state.value += 2},
        threetable: state=> { state.value += 3},
        reset    : state=> {state.value=0},
        
},

})
export const { increment, decrement,twotable,threetable}=cs.actions;
export const {reset}=cs.actions;
export default cs.reducer;

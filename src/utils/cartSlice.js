import { createSlice } from "@reduxjs/toolkit";

//It takes configuration to create slice
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        //reducer function but mapped as a action
        addItem : (state,action) =>{
            state.items.push(action.payload);
        },
        removeItem :(state,action) => {
            state.items.pop();
        },
        clearCart:(state, action) => {
            state.items.length = 0;
        },
    },
});


//export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;
//export reducer
export default cartSlice.reducer;
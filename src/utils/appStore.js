import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //Adding slice to store
    //If you want to modify store it also has a store
    //Store of all application reducer
    reducer:{
        //This is slice of store added in app store
        cart : cartReducer,
    }
});

export default appStore;

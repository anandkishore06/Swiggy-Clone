import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            // Redux toolkit uses immer BTS.
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearItem: (state) => {
            //  use either of one
            state.items.length = 0 // mutate the state
            // return { items: []}; // this new object will be replaced inside 
            // orginalState = {items = []}
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;

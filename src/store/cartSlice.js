import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
        items : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
        const idToRemove = action.payload.card.info.id;
        state.items = state.items.filter(item => item.card.info.id !== idToRemove);
        },
        clearCart: (state) => {
            state.items.length = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


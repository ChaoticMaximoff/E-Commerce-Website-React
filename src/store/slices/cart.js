import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            console.log(existingItem)
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalQuantity++;
                state.totalPrice += newItem.price;
            }
            else {
                state.itemList.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
                state.totalQuantity++;
                state.totalPrice += newItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const findItem = state.itemList.find((item) => item.id === action.payload.id);
            if (findItem.quantity === 1) {
                state.totalPrice -= findItem.price;
                state.itemList = state.itemList.filter((item) => item.id!== action.payload.id);
                
            }
            else {
                state.totalPrice -= findItem.price;
                findItem.quantity--;
                findItem.totalPrice = findItem.totalPrice - findItem.price;
            }
            state.totalQuantity--;
        },
        deleteFromCart: (state, action) => {
            state.totalQuantity -= action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
            state.itemList = state.itemList.filter((item) => item.id!== action.payload.id);

        },
}});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
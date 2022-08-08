import { createSlice} from "@reduxjs/toolkit";
import { calcTotalPrice } from '../utils/calcTotalPrice.js';
import { getCartFromLS } from '../utils/getCartFromLS.js';

const { cartItems, totalPrice } = getCartFromLS();

const initialState = {
    cartItems,
    totalPrice,
    totalCount: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state, action) => {
      const findItem = state.cartItems.find(obj => obj.id === action.payload.id)
      

      if(findItem) {
        findItem.count++;
        state.totalCount++
      } else {
        state.totalCount++
        state.cartItems.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = calcTotalPrice(state.cartItems)
      window.localStorage.setItem("totalPrice", state.totalPrice)
    },
    removeItem(state, action) {
      const filterItem =  state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      const findItem = state.cartItems.find(obj => obj.id == action.payload)
      if(findItem) {
        state.totalPrice -= findItem.price
        state.totalCount -= findItem.count
      }
      state.cartItems = filterItem;
    },
    clearItems(state, action) {
      state.cartItems = []
      state.totalPrice = 0;
    },
    removeCount(state, action) {
      const findItem = state.cartItems.find(obj => obj.id == action.payload)
      if(findItem) {
        findItem.count--
        state.totalPrice -= findItem.price
        state.totalCount--
      }
    },
  }
})

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeItem, clearItems, removeCount} = cartSlice.actions;
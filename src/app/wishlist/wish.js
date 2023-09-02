import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  wishlist: localStorage.getItem('wishlist')? JSON.parse(localStorage.getItem('wishlist')) : []
}

export const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
  addToWishlist: (state, action) => {
   const itemInlist = state.wishlist.find((item) => item._id === action.payload._id)
   if (itemInlist) {
    itemInlist.quantity++;
} else {
    state.wishlist.push({ ...action.payload, quantity: 1 });
}
   
},
  removewishlistItem: (state, action) => {
      const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
  },
  clearAllWishList: (state,action) =>{
   state.wishlist=[];
  }
},
})

export const { clearAllWishList, removewishlistItem,  addToWishlist } = wishSlice.actions

export default wishSlice.reducer
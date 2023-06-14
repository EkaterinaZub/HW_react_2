import { createSlice } from "@reduxjs/toolkit"

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: {
        basketCount: 0
    },
    reducers: {
        increaseCart: (state, action) =>{
            state.basketCount = state.basketCount + 1
        },

        decreaseCart: (state, action) =>{
            state.basketCount = state.basketCount - 1
        },
    }

})

export const {increaseCart,decreaseCart } = basketSlice.actions;

export default basketSlice.reducer
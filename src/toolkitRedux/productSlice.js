import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../reducer/initialState";

const productSlice = createSlice({
    name: "productCount",
    initialState: {
        productCount: initialState,
    },
    reducers: {
        increasePrice: (state, action) => {

            const { id, category } = action.payload;

            state.productCount.forEach(item => {

                if (item.url === category) {
                    item.products.forEach(el => {

                        if (el.id === +id) {

                            el.cartPrice = el.cartPrice + el.price;
                            el.cartCount = el.cartCount + 1;

                        }

                    })

                }

            })


        },

        decreasePrice: (state, action) => {

            const { id, category } = action.payload;

            state.productCount.forEach(item => {

                if (item.url === category) {
                    item.products.forEach(el => {

                        if (el.id === +id) {

                            el.cartPrice = el.cartPrice - el.price;
                            el.cartCount = el.cartCount - 1;

                        }

                    })

                }

            })


        },

        deleteProduct: (state, action) => {

            const { id, category } = action.payload;

            state.productCount.forEach(item => {

                if (item.url === category) {
                    item.products.forEach(el => {

                        if (el.id === +id) {

                            el.cartPrice = 0;
                            el.cartCount = 0;

                        }

                    })

                }

            })


        }
    }



})

export const { increasePrice, decreasePrice, deleteProduct } = productSlice.actions;

export default productSlice.reducer
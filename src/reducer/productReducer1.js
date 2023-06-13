import { INCREASE_PRICE, DECREASE_PRICE, DELETE_PRODUCT } from "./types"
import {initialState} from './initialState'



export const increasePrice = (payload)=> ({type: INCREASE_PRICE, payload})
export const decreasePrice = (payload)=> ({type: DECREASE_PRICE, payload})
export const deleteProduct = (payload)=> ({type: DELETE_PRODUCT, payload})

const productInitialState = {
    productCount: initialState,

}


const productReducer1 = (state = productInitialState , action) => {
    const {productCount} = state

    switch (action.type) {
        case INCREASE_PRICE: {
            const { id, category } = action.payload
            const newState = productCount.map(item => {
                
                if (item.url === category) {
                    const products = item.products.map(el => {

                        if (el.id === +id) {

                            return {

                                ...el,
                                cartPrice: el.cartPrice + el.price,
                                cartCount: el.cartCount + 1

                            }

                        }

                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return    {...state, productCount: newState}


        }
        case DECREASE_PRICE: {
            const { id, category } = action.payload

            const newState = productCount.map(item => {

                if (item.url === category) {
                    const products = item.products.map(el => {

                        if (el.id === +id) {

                            return {

                                ...el,
                                cartPrice: el.cartPrice - el.price,
                                cartCount: el.cartCount - 1

                            }

                        }

                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return    {...state, productCount: newState}

        }



        case DELETE_PRODUCT: {
            const { id, category } = action.payload

            const newState = productCount.map(item => {

                if (item.url === category) {
                    const products = item.products.map(el => {

                        if (el.id === +id) {

                            return {

                                ...el,
                                cartPrice:  0,
                                cartCount:  0

                            }

                        }

                        return el
                    })
                    return { ...item, products: products }
                }
                return item
            })
            return    {...state, productCount: newState}

        }
        default: return {...state}
    }


}


export default productReducer1
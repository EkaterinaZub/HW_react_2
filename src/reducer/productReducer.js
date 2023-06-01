/* eslint-disable default-case */
import { INCREASE_PRICE, DECREASE_PRICE } from "./types"


const productReducer = (state, action) => {

    // console.log(action)
    switch (action.type) {
        case INCREASE_PRICE: {
            const { id, category } = action
            const newState = state.map(item => {

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
            return newState

        }
        case DECREASE_PRICE: {
            const { id, category } = action

            const newState = state.map(item => {

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
            return newState

        }
    }


}


export default productReducer
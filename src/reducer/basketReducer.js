import { INCREASE_CART, DECREASE_CART } from "./types"


export const increaseCart = (payload)=> ({type: INCREASE_CART, payload})
export const decreaseCart = (payload)=> ({type: DECREASE_CART, payload})

const basketInitialState = {
    basketCount: 0,

}

export const basketReducer = (state = basketInitialState, action )=> {

    switch (action.type) {
        case INCREASE_CART: {
            return {
               ...state,
                basketCount: state.basketCount + 1,
            }
        }

        case DECREASE_CART: {
            return {
               ...state,
                basketCount: state.basketCount - 1,
            }
        }
        default: return {...state}
    }

}
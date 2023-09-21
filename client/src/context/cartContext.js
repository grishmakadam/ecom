import { createContext } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const cartReducer = (state, action) => {
        if (action.type == "+") {
            const temp= state.filter(x => x.product.id == action.payload.id)
            if (temp.length == 0) {
                return [
                    ...state,{product:action.payload,count:1}
                ]
            } else {
                temp.count+=1
                return [
                    ...state,{...temp}
                ]
            }
        }
    }
}
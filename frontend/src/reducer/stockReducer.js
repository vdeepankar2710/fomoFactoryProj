import { TYPES } from "../actions/actionTypes"
import { initialState } from "./initialState"

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.STOCK_ACTION: {
            let payload = action.payload
            //    console.log("payload in reducer", payload);
            if (payload.length === 0) return state;
            return {
                ...state,
                stock: [...action.payload]
            }
        }
        case TYPES.STOCK_SYMBOL: {
            let payload = action.payload
               console.log("payload type", payload);
            // if (payload.length === 0) return state;
            return {
                ...state,
                stockSymbol: action.payload
            }
        }
        default: {
            return state
        }
    }
}
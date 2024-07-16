import { TYPES } from "./actionTypes"

export function stockAction(payload) {
   return {
       type: TYPES.STOCK_ACTION,
       payload: payload
   }
}

export function stockSymbolAction(payload) {
    return {
        type: TYPES.STOCK_SYMBOL,
        payload:payload
    }
}

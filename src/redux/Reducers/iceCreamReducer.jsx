import * as ActionTypes from "../TypeConstants/iceCreamTypes";

const initialState = {
    numberOfIceCream: 5
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer;
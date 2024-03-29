import * as ActionType from "../TypeConstants/cakeTypes";

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload.number
            }

        default:
            return state;
    }
}

export default cakeReducer;
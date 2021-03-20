import * as ActionType from "../TypeConstants/cakeTypes";

export const buyCake = (number = 1) => (
    {
        type: ActionType.BUY_CAKE,
        payload: {
            number
        }
    }
)

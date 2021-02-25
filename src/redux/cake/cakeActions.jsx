import * as ActionType from "./cakeTypes";

export const buyCake = (number = 1) => (
    {
        type: ActionType.BUY_CAKE,
        payload: {
            number
        }
    }
)

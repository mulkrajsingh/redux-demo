import { combineReducers } from "redux";

import cakeReducer from "./Reducers/cakeReducer";
import iceCreamReducer from "./Reducers/iceCreamReducer";
import UserReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: UserReducer,
});

export default rootReducer;

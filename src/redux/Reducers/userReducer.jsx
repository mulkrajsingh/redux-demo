import * as UserActionType from "./UserTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserActionType.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        error: "",
      };
    case UserActionType.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default UserReducer;

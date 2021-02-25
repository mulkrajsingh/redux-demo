import * as UserActionType from "./UserTypes";

export const fetchUserRequest = () => ({
  type: UserActionType.FETCH_USERS_REQUEST,
});

export const fetchUserSuccess = () => ({
  type: UserActionType.FETCH_USERS_SUCCESS,
  payload: {
    users: users,
  },
});

export const fetchUserFailure = () => ({
  type: UserActionType.FETCH_USERS_FAILURE,
  payload: {
    error: error,
  },
});

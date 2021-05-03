import { UserModel } from "../welcome-form/models/users-model";
import { UserActions, UserActionTypes } from "./welcome-action";

export interface UserState {
    payload: UserModel | null,
}
export let initialState: UserState = {
    payload: null,
};

export function userReducer(state = initialState, action: UserActions): UserState {
    console.log(state, action);
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
import { UserModel } from "../welcome-form/models/users-model";
import { UserActions, UserActionTypes } from "./welcome-action";

export let initialState: UserModel = {};

export function userReducer(state = initialState, action: UserActions) {
    console.log(state, action);
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
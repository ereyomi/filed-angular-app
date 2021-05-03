import { UserModel } from "../welcome-form/models/users-model";
import { AddUser, UserActionTypes } from "./welcome-action";

export type Action = AddUser;
export let initialState: UserModel = {};

export function userReducer(state = initialState, action: Action) {
    console.log(state, action);
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
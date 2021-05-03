import { UserState } from "./user-state";
import { UserActions, UserActionTypes } from "./welcome-action";


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
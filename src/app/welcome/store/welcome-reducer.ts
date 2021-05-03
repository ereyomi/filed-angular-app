import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user-state";
import { UserActions, UserActionTypes } from "./welcome-action";


export let initialState: UserState = {
    payment: {
        firstName: 'ereyomi',
        lastName: 'ereyomi',
        monthlyAdvertisingBudget: 0,
        companyName: 'dgjdhgd',
        phoneNumber: 0
    }
};

const paymentSelector = createFeatureSelector<UserState>('welcome');
export const getPaymentSelector = createSelector(
    paymentSelector,
    state => state.payment,
);
export function userReducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                payment: {
                    ...action.payload

                }
            };
        default:
            return state;
    }
}
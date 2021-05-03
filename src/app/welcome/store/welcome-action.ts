import { createAction, props, Action } from "@ngrx/store";
import { UserModel } from "../welcome-form/models/users-model";

export interface UserActionModel {
    type: string,
    payload: UserModel;
}
export enum UserActionTypes {
    ADD_USER = '[User Data] Add User',
    REMOVE_USER = '[User Data] remove User'
}

/* export const addUser = createAction(
    '[User Data] Add User',
    props<{ payload: UserModel; }>()
); */
export class AddUser implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: UserModel) { }
}

export type userActions = AddUser;
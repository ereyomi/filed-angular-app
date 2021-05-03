import { UserModel } from "../welcome-form/models/users-model";

export interface UserActionModel {
    type: string,
    payload: UserModel;
}
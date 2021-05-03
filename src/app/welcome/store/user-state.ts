import { UserModel } from "../welcome-form/models/users-model";

export interface UserState {
    payload: UserModel | null,
}
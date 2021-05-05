import { UserModel } from '../welcome-form/models/users-model';
import * as forRoot from '../../core/store/app-state';
export interface UserState extends forRoot.AppState {
    payment: UserModel | null;
}
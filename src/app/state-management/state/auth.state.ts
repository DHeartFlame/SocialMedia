import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/models/User';

export interface State {
    authenticatedUser: User;
}
export const initialState: State = {
    authenticatedUser: new User()
};

export const AuthReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, { username, password }) => ({ ...state })),
    on(AuthActions.register, (state, { user }) => ({ ...state })),
);
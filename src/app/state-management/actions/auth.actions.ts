import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/User';

export const login = createAction(
    '[Auth Component] Login',
    props<{ username: string; password: string }>()
);
export const register = createAction(
    '[Auth Component] CreateUser',
    props<{user: User}>()
);
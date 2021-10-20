import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const loadUser = createAction('[Users] loading user',props<{id:string}>());
export const loadUserSuccess = createAction('[Users] loading user success', props<{ user: User }>());
export const loadUserError = createAction('[Users] loading user error', props<{ payload: any }>());
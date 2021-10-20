import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const loadUsers = createAction('[Users] loading users');
export const loadUsersSuccess = createAction('[Users] loading users success', props<{users:User[]}>());
export const loadUsersError = createAction('[Users] loading users error', props<{ payload:any }>());
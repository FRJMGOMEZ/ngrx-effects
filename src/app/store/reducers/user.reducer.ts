import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';

export interface UserState {
    id:string
    user: User
    loaded: boolean
    loading: boolean
    error: any
}

export const initialStateUsers: UserState = {
    id:null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _userReducer = createReducer(initialStateUsers,
    on(loadUser, (state,{id}) => ({ ...state,id,loading: true })),
    on(loadUserSuccess, (state, { user }) => ({ ...state, user:{...user}, loaded: true, loading: false })),
    on(loadUserError, (state, { payload }) => ({ ...state, loaded: false, loading: false, error: { url: payload.url, name: payload.name, message: payload.message } }))
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}
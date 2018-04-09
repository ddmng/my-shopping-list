import * as AppActions from './user-actions';
import { createSelector } from '@ngrx/store';

export interface State {
    readonly email: string;
    readonly displayName: string;
}

const initialState: State = {
    email: '',
    displayName: ''
};

export function userReducer(state = initialState, action: AppActions.All ): State {
    console.log('User Reducer: ', action.type);

    switch (action.type) {
        case AppActions.AppActionTypes.UPDATE_USER: {
            return {
                ...state,
                email: action.payload.email,
                displayName: action.payload.displayName
            };
        }
        default: {
            return state;
        }
    }
}

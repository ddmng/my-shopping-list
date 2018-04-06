import { ShoppingItem } from '../models/shopping-item';
import { PizzaItem } from '../models/pizza-item';
import * as AppActions from './shopping-actions';
import { createSelector } from '@ngrx/store';

export interface State {
    readonly item: string;
    readonly loading: boolean;
    readonly shoppings: ShoppingItem[];
}

const initialState: State = {
    item: '',
    loading: false,
    shoppings: [],
};


export function shoppingReducer(state = initialState, action: AppActions.All ): State {
    console.log('Shopping Reducer: ', action.type);

    switch (action.type) {
        case AppActions.AppActionTypes.ADD_SHOPPING: {
            return {
                ...state,
                loading: true
            };
        }
        case AppActions.AppActionTypes.ADDED_SHOPPING: {
            return {
                ...state,
                loading: false,
                item: ''
            };
        }
        case AppActions.AppActionTypes.UPDATE_ITEM: {
            return {
                ...state,
                item: action.payload
            };
        }
        case AppActions.AppActionTypes.REMOVE_SHOPPING: {
            return {
                ...state,
                loading: true
            };
        }
        case AppActions.AppActionTypes.REMOVED_SHOPPING: {
            return {
                ...state,
                loading: false
            };
        }
        default: {
            return state;
        }
    }
}

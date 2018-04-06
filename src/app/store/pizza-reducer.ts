import { ShoppingItem } from '../models/shopping-item';
import { PizzaItem } from '../models/pizza-item';
import * as AppActions from './pizza-actions';
import { createSelector } from '@ngrx/store';

export interface State {
    readonly item: string;
    readonly loading: boolean;
    readonly pizzas: PizzaItem[];
}

const initialState: State = {
    item: '',
    loading: false,
    pizzas: [],
};


export function pizzaReducer(state = initialState, action: AppActions.All ): State {
    console.log('Pizza Reducer: ', action.type);

    switch (action.type) {
        case AppActions.AppActionTypes.ADD_PIZZA: {
            return {
                ...state,
                loading: true
            };
        }
        case AppActions.AppActionTypes.ADDED_PIZZA: {
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
        case AppActions.AppActionTypes.REMOVE_PIZZA: {
            return {
                ...state,
                loading: true
            };
        }
        case AppActions.AppActionTypes.REMOVED_PIZZA: {
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

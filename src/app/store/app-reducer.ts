import { ShoppingItem } from '../models/shopping-item';
import { PizzaItem } from '../models/pizza-item';
import * as AppActions from './app-actions';
import { createSelector } from '@ngrx/store';

export interface State {
    loading: boolean;
    shoppings: ShoppingItem[];
    pizzas: PizzaItem[];
}

const initialState: State = {
    loading: false,
    shoppings: [],
    pizzas: []
};


export function reducer(state = initialState, action: AppActions.All ): State {
    console.log('Reducer: ', action.type);

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
                loading: false
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

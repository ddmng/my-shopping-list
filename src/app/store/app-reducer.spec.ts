import * as reducer from './app-reducer';
import { State } from '@ngrx/store';
import { All, AddShopping, AddedShopping, RemoveShopping, RemovedShopping } from './app-actions';

describe('Shopping reducer', () => {
    const state1: reducer.State = {
        item: 'xx',
        loading: false,
        shoppings: []
    };
    const state2: reducer.State = {
        item: 'xx',
        loading: true,
        shoppings: []
    };

    it('should manage AddShopping', () => {
        const res = reducer.shoppingReducer(state1, new AddShopping() );
        expect(res.loading).toBe(true);
        expect(res.item).toBe(state1.item);
    });

    it('should manage AddedShopping', () => {
        const res = reducer.shoppingReducer(state2, new AddedShopping() );
        expect(res.loading).toBe(false);
        expect(res.item).toBe('');
    });

    it('should manage RemoveShopping', () => {
        const res = reducer.shoppingReducer(state1, new RemoveShopping({key: 'a', text: 'b'}) );
        expect(res.loading).toBe(true);
        expect(res.item).toBe(state2.item);
    });

    it('should manage RemovedShopping', () => {
        const res = reducer.shoppingReducer(state2, new RemovedShopping() );
        expect(res.loading).toBe(false);
        expect(res.item).toBe(state2.item);
    });
});

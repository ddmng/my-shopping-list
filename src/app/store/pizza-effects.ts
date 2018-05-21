import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators';
import * as AppActions from './pizza-actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/empty';
import * as fromRoot from './pizza-reducer';
import { PizzaService } from '../pizza/pizza.service';

@Injectable()
export class PizzaEffects {
    @Effect()
    addPizza$: Observable<Action> =
        this.actions$.ofType(AppActions.AppActionTypes.ADD_PIZZA)
            .pipe(
                withLatestFrom(this.store.pipe(select('pizza'))),
                tap(console.debug),
                switchMap(([action, state]) => {
                    if (state.item !== '') {
                        this.service.add(state.item);
                    }
                    console.debug('Dispatching AddedPizza');
                    return of(new AppActions.AddedPizza());
                }),
                catchError((err, caugth) => {
                    console.debug('Error adding item', err);
                    return of(new AppActions.AddedPizza());
                })
            );

    @Effect()
    removePizza$: Observable<Action> =
        this.actions$.ofType(AppActions.AppActionTypes.REMOVE_PIZZA)
            .pipe(
                tap(console.debug),
                switchMap((action, index) => {
                    if (action.payload.key !== '') {
                        this.service.remove(action.payload.key, action.payload.text);
                    }
                    return of(new AppActions.RemovedPizza());
                }),
        );

    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private service: PizzaService
    ) { }
}

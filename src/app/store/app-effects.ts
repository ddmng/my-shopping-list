import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as AppActions from './app-actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/empty';
import * as fromRoot from './app-reducer';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable()
export class AppEffects {
    @Effect()
    addShopping$: Observable<Action> =
        this.actions$.ofType(AppActions.AppActionTypes.ADD_SHOPPING)
            .pipe(
                withLatestFrom(this.store.pipe(select('shopping'))),
                tap(console.log),
                switchMap( ([action, state]) => {
                    this.service.add(state.item);
                    return of(new AppActions.AddedShopping());
                }),
        );

    @Effect()
    removeShopping$: Observable<Action> =
        this.actions$.ofType(AppActions.AppActionTypes.REMOVE_SHOPPING)
            .pipe(
                tap(console.log),
                switchMap((action, index) => {
                    this.service.remove(action.payload.key, action.payload.text);
                    return of(new AppActions.RemovedShopping());
                }),
        );

    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private service: ShoppingService
    ) { }
}

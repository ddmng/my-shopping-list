import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import * as AppActions from './app-actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/empty';
import * as fromRoot from './app-reducer';

@Injectable()
export class AppEffects {
    @Effect()
    addShopping$: Observable<Action> =
    this.actions$.ofType(AppActions.AppActionTypes.ADD_SHOPPING)
    .pipe(
        switchMap( (action, index)  => of(new AppActions.AddedShopping()) ),
    );

    @Effect()
    removeShopping$: Observable<Action> =
    this.actions$.ofType(AppActions.AppActionTypes.REMOVE_SHOPPING)
    .pipe(
        switchMap( (action, index)  => of(new AppActions.RemovedShopping()) ),
    );

    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>
    ) {}
}

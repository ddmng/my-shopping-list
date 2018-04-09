import { Action } from '@ngrx/store';
import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AppActionTypes {
    ADD_SHOPPING = '[Shopping] Add',
    ADDED_SHOPPING = '[Shopping] Added',
    REMOVE_SHOPPING = '[Shopping] Remove',
    REMOVED_SHOPPING = '[Shopping] Removed',
    UPDATE_ITEM = '[Shopping] Update item',
    SYNC_SHOPPING = '[Shopping] Sync shopping'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddShopping implements Action {
    readonly type = AppActionTypes.ADD_SHOPPING;

    constructor(public user: string) { }
}

export class UpdateItem implements Action {
    readonly type = AppActionTypes.UPDATE_ITEM;

    constructor(public payload: string) { }
}

export class AddedShopping implements Action {
    readonly type = AppActionTypes.ADDED_SHOPPING;

    constructor() { }
}

export class RemoveShopping implements Action {
    readonly type = AppActionTypes.REMOVE_SHOPPING;

    constructor(public payload: {key: string, text: string}) { }
}
export class RemovedShopping implements Action {
    readonly type = AppActionTypes.REMOVED_SHOPPING;

    constructor() { }
}

export class SyncShopping implements Action {
    readonly type = AppActionTypes.SYNC_SHOPPING;

    constructor(public payload: AngularFireAction<DataSnapshot>[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type All
    = AddShopping
    | AddedShopping
    | UpdateItem
    | RemoveShopping
    | RemovedShopping
    | SyncShopping;

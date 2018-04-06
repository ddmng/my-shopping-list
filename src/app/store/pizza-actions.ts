import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AppActionTypes {
    UPDATE_ITEM = '[Pizza] Update item',
    ADD_PIZZA = '[Pizza] Add',
    ADDED_PIZZA = '[Pizza] Added',
    REMOVE_PIZZA = '[Pizza] Remove',
    REMOVED_PIZZA = '[Pizza] Removed'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */

export class UpdateItem implements Action {
    readonly type = AppActionTypes.UPDATE_ITEM;

    constructor(public payload: string) { }
}

export class AddPizza implements Action {
    readonly type = AppActionTypes.ADD_PIZZA;

    constructor() { }
}
export class AddedPizza implements Action {
    readonly type = AppActionTypes.ADDED_PIZZA;

    constructor() { }
}

export class RemovePizza implements Action {
    readonly type = AppActionTypes.REMOVE_PIZZA;

    constructor(public payload: {key: string, text: string}) { }
}
export class RemovedPizza implements Action {
    readonly type = AppActionTypes.REMOVED_PIZZA;

    constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type All
    = UpdateItem
    | AddPizza
    | AddedPizza
    | RemovePizza
    | RemovedPizza;

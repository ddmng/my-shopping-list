import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AppActionTypes {
    ADD_SHOPPING = '[Shopping] Add',
    ADDED_SHOPPING = '[Shopping] Added',
    REMOVE_SHOPPING = '[Shopping] Remove',
    REMOVED_SHOPPING = '[Shopping] Removed',
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
export class AddShopping implements Action {
    readonly type = AppActionTypes.ADD_SHOPPING;

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

export class AddPizza implements Action {
    readonly type = AppActionTypes.ADD_PIZZA;

    constructor(public payload: string) { }
}
export class AddedPizza implements Action {
    readonly type = AppActionTypes.ADDED_PIZZA;

    constructor() { }
}

export class RemovePizza implements Action {
    readonly type = AppActionTypes.REMOVE_PIZZA;

    constructor(public payload: number) { }
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
    = AddShopping
    | AddedShopping
    | RemoveShopping
    | RemovedShopping
    | AddPizza
    | AddedPizza
    | RemovePizza
    | RemovedPizza;

import { Action } from '@ngrx/store';

export interface User {
    email: string;
    displayName: string;
}

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AppActionTypes {
    UPDATE_USER = '[User] Update user',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */

export class UpdateUser implements Action {
    readonly type = AppActionTypes.UPDATE_USER;

    constructor(public payload: User) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type All
    = UpdateUser;

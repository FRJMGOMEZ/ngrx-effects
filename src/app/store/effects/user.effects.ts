import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { User } from "src/app/core/models/user.model";
import { UserService } from "src/app/core/services/user.service";
import * as actions from "../actions";
import { of } from 'rxjs'


@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userServices: UserService) { }

    loadUser$ =
        createEffect(() => this.actions$
            .pipe(
                ofType(actions.loadUser),
                tap(console.log),
                mergeMap(
                    (action) => this.userServices.getUserById(action.id).pipe(
                        map((user: User) => actions.loadUserSuccess({ user })),
                        tap(console.log),
                        catchError(err => of(actions.loadUserError({ payload: err })))
                    )
                )
            ))

}
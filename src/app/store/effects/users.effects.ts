import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { User } from "src/app/core/models/user.model";
import { UserService } from "src/app/core/services/user.service";
import * as usersActions from "../actions";
import {of} from 'rxjs'


@Injectable()
export class UsersEffects{

    constructor(private actions$:Actions, private userServices:UserService){}

    loadUsers$ = 
    createEffect(()=>this.actions$
      .pipe(
        ofType(usersActions.loadUsers),
        mergeMap(
            () => this.userServices.getUsers().pipe(
                map((users:User[])=> usersActions.loadUsersSuccess({users}) ),
                catchError(err=>  of(usersActions.loadUsersError({payload:err})))
            )
        )
    ))

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  loading:boolean;
  error:boolean;

  constructor(private ar:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, loading, error }) => {
      console.log({user});
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
    this.ar.params.subscribe(({id})=>{
       this.store.dispatch(actions.loadUser({id}));
    })
  }

}

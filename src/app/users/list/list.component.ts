import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading:boolean;
  error:any;
  users:User[] = [];

  constructor(private router:Router, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe(({users,loading,error})=>{
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUsers());
    this.loading
  }

  goToUser(id:number){
     this.router.navigate(['/user/'+ id]);
  }

}

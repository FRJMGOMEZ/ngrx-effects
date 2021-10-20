import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users:User[] = [];

  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users:User[])=>{
     this.users = users;
    });
  }

  goToUser(id:number){
     this.router.navigate(['/user/'+ id]);
  }

}

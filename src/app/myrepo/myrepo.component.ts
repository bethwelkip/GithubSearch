import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service'
import { User } from '../classes/user'
@Component({
  selector: 'app-myrepo',
  templateUrl: './myrepo.component.html',
  styleUrls: ['./myrepo.component.css']
})
export class MyrepoComponent implements OnInit {
  mainUser: User;
  userRepos: any;
  constructor(private serv: ServService) {

  }

  ngOnInit(): void {
    this.serv.getUsers();
    this.mainUser = this.serv.user;
    this.serv.getRepos()
    this.userRepos = this.serv.repository;
    // console.log(this.userRepos)

  }

}

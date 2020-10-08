import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  username: string;
  image: string;
  repos: string[];
  link: string;
  constructor() {
    this.user = new User();
    this.repos = [];
    this.username = "";
    this.image = "";
  }

  ngOnInit(): void {
  }

}

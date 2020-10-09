import { Component, OnInit } from '@angular/core';
import { ServService } from '../services/serv.service';
import { User } from '../classes/user';

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

  searchUsername(user) {
    // console.log("user wants to find   :, ", user);
    this.serv.getSearchedUser(user).then((success) => {
      this.user = this.serv.searchedUser;
      console.log("returned username", this.serv.searchedUser.username);
      this.username = this.user.username;
      this.image = this.user.image;
      this.serv.getSearchedUserRepos(this.user.repo);
      this.repos = this.serv.TOTO;
    }, error => {
      console.log("Biiiiig biggg error")
    });

    this.serv.TOTO = []
  }

  constructor(private serv: ServService) {
    this.user = new User();
    this.repos = [];
    // this.user.username = "";
    // this.user.image = "";
    // this.user.repo = "";
  }


  ngOnInit(): void {
  }

}

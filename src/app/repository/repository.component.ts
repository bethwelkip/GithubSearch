import { Component, OnInit } from '@angular/core';
import { Repository } from '../classes/repository'
import { ServService } from '../services/serv.service';
import { User } from '../classes/user';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: Repository;
  displayRepos: string[];
  user: UserComponent;
  finalUser: User;

  searchRepository(repository) {
    // console.log(repository);
    this.serv.getMainRepos(repository);
    this.repo.repo = this.serv.mainRepos;
    this.displayRepos = this.repo.repo
  }

  searchUsername(user: string) {
    console.log(user);
    this.serv.getSearchedUser(user);
    this.finalUser.username = this.serv.searchedUser.username;
    console.log(this.serv.searchedUser.username)
    // this.serv.getSearchedUserRepos(this.finalUser.repo);
    // this.finalUser.username = this.serv.searchedUser.username;
    // this.finalUser.image = this.serv.searchedUser.image
    console.log(this.serv.searchedUser.repo)


  }

  constructor(private serv: ServService) {
    this.repo = new Repository();
    this.displayRepos = new Array();
    //this.user = new UserComponent();
    this.finalUser = new User();
    //
    this.finalUser.username = "";
    this.finalUser.image = "";
    //
  }

  ngOnInit(): void {

  }

}

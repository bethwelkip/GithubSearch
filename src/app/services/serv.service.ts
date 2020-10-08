import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { rejects } from 'assert';
import { User } from '../user'
import { ThrowStmt } from '@angular/compiler';
import { Repository } from '../repository';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  private repoLink: string = "https://api.github.com/search/repositories?access_token=b9c71f1772a0d08552e743bf39fbc67f1bd0c954&q=";
  private url = "https://api.github.com/users/bethwelkip";
  private usernameLink: string = "https://api.github.com/users/";
  user: User;
  repo: string = "https://api.github.com/users/bethwelkip/repos";
  repository: string[];
  mainRepos: string[];
  searchRepo: Repository;
  searchedUser: User;
  finalUser: UserComponent;

  constructor(private http: HttpClient) {
    this.user = new User();
    this.searchedUser = new User();
    //
    this.searchedUser.username = "";
    //
    this.repository = [];
    this.mainRepos = [];
    this.searchRepo = new Repository();
    // this.finalUser = new UserComponent(this)
  }

  getUsers() {
    interface ApiResponse {
      login: string;
      repos_url: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.url).toPromise().then(
        response => {
          // console.log(response);
          this.user.username = response.login;
          this.user.image = response.avatar_url
          this.user.repo = response.repos_url
          this.repo = response.repos_url
          resolve()
        }, error => {
          reject(error)
        })
    })
    return promise
  }

  getRepos() {

    interface ApiResponse {
      name: [];
      description: string;
      // repositories: any;
      // displayPicture: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.repo).toPromise().then(
        response => {
          // console.log(response)
          let i: string = response[0].name
          // console.log(i);
          for (let proj in response) {
            this.repository.push(response[proj].name)
            this.repository.push(response[proj].description)
          }
          resolve()
        }, error => {
          reject(error)
        })
    })
    return promise
  }




  getMainRepos(name: string) {
    this.repoLink = this.repoLink + name;
    console.log(this.repoLink)
    interface ApiResponse {
      items: any[];
      name: string;
      description: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.repoLink).toPromise().then(
        response => {
          //console.log(response.items[0])
          let i: string = response.items[0].description
          // console.log(i);
          for (let proj in response.items) {
            this.mainRepos.push(response.items[proj].name)
            this.mainRepos.push(response.items[proj].description)
          }
          console.log(this.mainRepos)

          resolve()
        }, error => {
          reject(error)
        })
    })
    return promise
  }

  getSearchedUser(link: string) {
    this.usernameLink = this.usernameLink + link;
    console.log(this.usernameLink)

    interface ApiResponse {
      login: string;
      repos_url: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.usernameLink).toPromise().then(
        response => {
          console.log("successful http request:   ", response)
          this.searchedUser.repo = response.repos_url;
          this.searchedUser.image = response.avatar_url;
          this.searchedUser.username = response.login;
          console.log(this.searchedUser.username);
          resolve()
        }, error => {
          console.log("error on http", error);
          // "username"
          // "repositories"
          // "displayPicture"
          reject(error)
        })
    })
    return promise
  }


  getSearchedUserRepos(url) {
    console.log("the url", url)
    interface ApiResponse {
      items: string[];
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(url).toPromise().then(
        response => {

          //console.log("repos", response)
          //this.finalUser.fillDetails(this.searchedUser)

          // let i: string = response.items[0].description
          // // console.log(i);
          // for (let proj in response.items) {
          //   this.mainRepos.push(response.items[proj].name)
          //   this.mainRepos.push(response.items[proj].description)
          // }
          // console.log(this.mainRepos)

          resolve()
        }, error => {
          console.log("error on http", error);
          // "username"
          // "repositories"
          // "displayPicture"
          reject(error)
        })
    })
    return promise


  }




}



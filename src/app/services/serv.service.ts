import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { rejects } from 'assert';
import { User } from '../user'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  private url = "https://api.github.com/users/bethwelkip";
  user: User;
  repo: string = "https://api.github.com/users/bethwelkip/repos";
  repository: string[];
  constructor(private http: HttpClient) {
    this.user = new User();
    this.repository = []
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
          // "username"
          // "repositories"
          // "displayPicture"
          reject(error)
        })
    })
    return promise
  }

  getRepos() {
    console.log(this.repo)
    interface ApiResponse {
      name: [];
      // repositories: any;
      // displayPicture: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.repo).toPromise().then(
        response => {
          let i: string = response[0].name
          console.log(i);
          for (let proj in response) {
            this.repository.push(response[proj].name)
          }
          // response.username
          // response.repositories
          // response.displayPicture
          resolve()
        }, error => {
          // "username"
          // "repositories"
          // "displayPicture"
          reject(error)
        })
    })
    return promise
  }
}



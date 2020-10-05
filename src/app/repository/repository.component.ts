import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: Repository;
  searchRepository(repository) {
    this.repo = new Repository();
    this.repo.searchRepository(repository);

  }
  searchUsername(user) {

    this.repo = new Repository();
    this.repo.searchRepository(user);

  }

  constructor() { }

  ngOnInit(): void {
  }

}

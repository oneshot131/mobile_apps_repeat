import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { } // use movie service instead of http client to get data from api

  ngOnInit() {
  }

  searchChanged(){ // Call when new search defined or type changed
    this.results = this.movieService.searchData(this.searchTerm, this.type); // This is an observable

    this.results.subscribe(res => {

    })
  }
}

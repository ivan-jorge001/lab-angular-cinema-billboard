import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movies-model';
import { CreationService } from '../Service/creation.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
public movies:Movie[];
  constructor(private myservice:CreationService) { }

  ngOnInit() {
    this.movies = this.myservice.getMovies()
  }

}

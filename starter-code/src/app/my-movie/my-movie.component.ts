import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movies-model';
import { CreationService } from '../Service/creation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
private movieId:string;
public movie;
    constructor(private myservice:CreationService, private myroute:ActivatedRoute) { }

  ngOnInit() {
this.myroute.params.subscribe((paramsResult)=>{
this.movieId = paramsResult['id']
})

this.movie = this.myservice.getMovie(this.movieId)
// console.log(this.myservice.getMovie(this.movieId))
  }

}

import { Injectable } from '@angular/core';
import  arrayOfMovies  from '../sample-movies';


@Injectable()
export class CreationService {

  constructor() { }
getMovies(){
  return arrayOfMovies
}
getMovie(id):void{

  let thatbit;

  arrayOfMovies.forEach((oneMovie)=>{

    if(oneMovie.id == id){

      return thatbit = oneMovie;
    }
    return thatbit;
  })
    console.log(thatbit)
return thatbit;
}
}

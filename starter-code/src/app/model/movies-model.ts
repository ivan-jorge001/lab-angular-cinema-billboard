export class Movie{
  public id: number;
  public title: string;
  public poster: string;
  public synopsis: string;
  public Genres: Array<string>;
  public year: number;
  public director: string;
  public actors: Array<string>;
  public hours: Array<string>;
  public room: number;

  constructor(id: number,title: string,poster: string,synopsis: string,Genres: Array<string>,year: number,director: string,actors: Array<string>,hours: Array<string>,room: number){
this.id= id
this.title= title
this.poster= poster
this.synopsis= synopsis
this.Genres= Genres
this.year= year
this.director= director
this.actors= actors
this.hours= hours
this.room= room
   }
}

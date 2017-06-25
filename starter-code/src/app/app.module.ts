import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule  } from '@angular/router';


import { AppComponent } from './app.component';
import { CreationService } from './Service/creation.service';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const router: Routes=[
{path:'home',component:MyHomeComponent},
{path:'movie/:id',component:MyMovieComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router),
  ],
  providers: [CreationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

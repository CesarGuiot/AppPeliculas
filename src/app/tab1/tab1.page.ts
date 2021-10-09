import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasNuevas: Pelicula[] = [];

  slideOpts={
    slidesPerview: 1.3,
    freeMode: true
  };

  constructor( private movieService: MoviesService ) {}

  ngOnInit(){
    this.movieService.getFeature()
    .subscribe(resp => {
      //console.log('Resp', resp.results)
      this.peliculasNuevas = resp.results;
    } );
  }

}

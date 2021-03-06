import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaDetalle, RespuestaMDB, ActoresPelicula } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>(query:string){
    query=URL + query;
    query +=`&api_key=${apikey}&language=es`;
    return this.http.get<T>(query);
  }

  getPopulares(){
    const query = '/discover/movie?sort_by=popularity.desc';
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getFeature(){
    
    const hoy = new Date();
    const ultimoDia=new Date(hoy.getFullYear(),hoy.getMonth() + 1, 0).getDate();
    const mes= hoy.getMonth()+1;

    let mesString;

    if(mes <10){
      mesString = '0'+ mes;
    }else{
      mesString = mes;
    }
      const inicio= `${ hoy.getFullYear() }-${mesString}-01`;
      const fin= `${ hoy.getFullYear() }-${mesString}-${ultimoDia}`;

      console.log("inicio", inicio);
      console.log("fin", fin);

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPeliculaDetalle(id:string){ 
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id:string){
    return this.ejecutarQuery<ActoresPelicula>(`/movie/${id}/credits?a=1`);
  }

}

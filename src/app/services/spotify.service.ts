import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'

@Injectable()
export class SpotifyService {

  //Si no existe el parámetro providedIn:'root' en el decorador @Injectable,
  //habría que  importar el servicio en app.module [providers]
  //Requiere importar {HttpClient} en app.module
  constructor(private http:HttpClient) {
    console.log("Spotify Service listo");
   }
   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;
     const headers= new HttpHeaders({
      'Authorization' : 'Bearer BQAEE6CYqq7I-YKb99xTbmdNg72Oilgs0bJ6d23wtZtGb1yY818G7BPBD1Bj0ewB3eEvpnVjPxeGtK5erQUXZMx0HKVx8NFLtp70jUBAPzEFg9Q-n2SOw5pOmLsXx7KSU9ESmIkg5FYsnPLU93dk4dcQa59s3Gg'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases(){

      return this.getQuery('browse/new-releases?limit=20').pipe(map( data=>{
        return data['albums'].items;
      }));

   }

   getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data=>data['artists'].items));

   }
}

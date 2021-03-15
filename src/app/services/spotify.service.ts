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
      'Authorization' : 'Bearer BQDF0H3gSWIBWzWPwWcr9Wb4YjCejAozUgziPD_pXpe6Du3ly4wOlShWxuQ-Y8o35GDURo_U131zptMjsXpXjywFgdAe70vY8hqGqQFSPoBqzqS6NJGTyanLSiN4WAVDgWhWse_Pb78UfISfgBfvWHtPGIns7Gw'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases(){

      return this.getQuery('browse/new-releases?limit=20').pipe(map( data=>{
        return data['albums'].items;
      }));

   }

   getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data=>data['artists'].items));

   }

   getArtista(id:string){
    return this.getQuery(`artists/${id}`);//.pipe(map(data=>data['artists'].items));
   }
}

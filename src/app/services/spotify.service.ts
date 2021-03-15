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
      'Authorization' : 'Bearer BQDMeCCJjJn6nUOLr557apFPkGfO_ezS96QjEECYeLSBIrl9MyaJQdkhnB838xwEUhr8q_NsId_7DezOnzXacjS5KPqMPc8vQo6B3ZBR7xWXS8XXlHveDIbUXEcQwVKq7n9zx0DsHMfm_pVQ9IAc3V_wYiX1i9g'
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

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data=>data['tracks']));
   }
}

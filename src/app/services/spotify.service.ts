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
      'Authorization' : 'Bearer BQDzIQRzWki4AuQ6PNgMBpMv3dLnEFPAbnrURHmawia-_hmZ9NqKmbB0EU3UziHCEAp25a_j9jw1A0XuQK0cs1nbZ4-xVlpk046ccp3z26DU_ViSl6XoDj0akmM5OBwp1S-o0ANZ6ZVwwXXXHiecrSlS51mr6Zs'
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

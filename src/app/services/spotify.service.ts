import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  //Si no existe el parámetro providedIn:'root' en el decorador @Injectable,
  //habría que  importar el servicio en app.module [providers]
  //Requiere importar {HttpClient} en app.module
  constructor(private http:HttpClient) {
    console.log("Spotify Service listo");
   }

   getNewReleases(){
      const headers= new HttpHeaders({
        'Authorization' : 'Bearer BQAEE6CYqq7I-YKb99xTbmdNg72Oilgs0bJ6d23wtZtGb1yY818G7BPBD1Bj0ewB3eEvpnVjPxeGtK5erQUXZMx0HKVx8NFLtp70jUBAPzEFg9Q-n2SOw5pOmLsXx7KSU9ESmIkg5FYsnPLU93dk4dcQa59s3Gg'
      });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }
}

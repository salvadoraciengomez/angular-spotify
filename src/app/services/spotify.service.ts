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
        'Authorization' : 'Bearer BQDk7owt6bZi0g1rIOLv5EbfZVhq6OfSmPFsG_Ud2R1EHLDU-AEUCqHqAV2YQQIgFgCsaDY4kbavHUSQwpH9Tn3TGCQOy9BhCL6QhUMwdJnRXV44W6nZvt-vpwwKjg7yQ3oSNbZle7opm6StIAifG-BaGjSjZ9E'
      });
      this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe(data=>{
      console.log(data);
    })
   }
}

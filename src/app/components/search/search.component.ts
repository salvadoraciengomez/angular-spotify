import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  loading:boolean;
  artistas:any[]=[];
  constructor(private spotify:SpotifyService ) {
    this.loading=true;
  }
  buscar(termino:string){
    this.spotify.getArtista(termino).subscribe((data:any)=>{
      this.artistas=data;
      this.loading=false;
    });
  }


}

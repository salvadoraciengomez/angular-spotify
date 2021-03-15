import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  loadingArtist:boolean=false;
  artista:any={};
  constructor(private aroute:ActivatedRoute, private spotify:SpotifyService) {
    this.loadingArtist=true;
    this.aroute.params.subscribe(params=>{
      this.getArtista(params['id']);
    })
   }

   getArtista(id:string){
      this.loadingArtist=true;
      this.spotify.getArtista(id).subscribe(artista=>{
        console.log(artista);
        this.artista=artista;
        this.loadingArtist=false;
      });
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  errMsg:string;

  constructor( private spotify:SpotifyService) {
    this.loading=true;
    this.error=false;
    this.spotify.getNewReleases().subscribe((data:any)=>{
      console.log(data);
      this.nuevasCanciones= data;
      this.loading=false;
    },(errorSvc)=>{
      this.loading=false;
      this.error=true;
      this.errMsg=errorSvc.error.error.message;
    });

  }

  ngOnInit(): void {
  }

}

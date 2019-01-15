import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

// Peticiones HTTP.get import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe ( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        });
  }
}



  /*
  Peticiones HTTP.get

  paises: any[] = [];

  constructor(private http: HttpClient) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
          .subscribe( (resp: any) => {
            this.paises = resp;
            console.log(resp);
          });
   }
*/



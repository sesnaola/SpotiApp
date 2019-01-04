import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Ready');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCWOSLl9gN9Ly2cdErAj4x_7sm0tZ9-6v88J5YK8ZFJ3uBwiN-VXOpOdtsvji4sdGxoO5UZf3Jz00Mg4BM'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=15', { headers });
  }

  getArtista (termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCWOSLl9gN9Ly2cdErAj4x_7sm0tZ9-6v88J5YK8ZFJ3uBwiN-VXOpOdtsvji4sdGxoO5UZf3Jz00Mg4BM'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}

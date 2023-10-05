import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Artwork, ArtworkResponse } from '../entities/artic.entity';

@Injectable({
  providedIn: 'root'
})
export class ArticService {
  private BASE_URL = "https://api.artic.edu/api/v1/"
  private fields = 'id,artist_id,artist_title,date_display,image_id,thumbnail,title'
  constructor(private http: HttpClient) {

  }

  getArtworks(page: number): Observable<ArtworkResponse> {
    console.log('Get Artworks, Page ', page)
    return this.http.get<ArtworkResponse>(this.BASE_URL + `artworks?fields=${this.fields}&page=${page}`)
  }

  searchArtworks(term: string, page: number): Observable<ArtworkResponse> {
    console.log('Find Artworks by key: ', term)
    return this.http.get<ArtworkResponse>(this.BASE_URL + `artworks/search?q=${term}&fields=${this.fields}&query[term][is_public_domain]=true&page=${page}`)
  }

  getArtwork(id: number): Observable<{ data: Artwork }> {
    console.log('Get artwork by id: ', id)
    return this.http.get<{ data: Artwork }>(this.BASE_URL + `artworks/${id}?fields=${this.fields}`)
  }

}

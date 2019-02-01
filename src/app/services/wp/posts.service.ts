import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl : string = 'https://www.oxygenna.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) { }

  public getPosts(postType : string, params) : Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.apiUrl + postType, {
      params,
      observe: 'response',
    });
  }

  public getPost(postType : string, postSlug : string) {
    return this.http.get<any[]>(`${this.apiUrl}${postType}?slug=${postSlug}`);
  }
}

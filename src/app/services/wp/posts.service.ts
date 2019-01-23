import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl : string = 'https://www.oxygenna.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) { }

  getPosts(postType : string, params) : Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + postType, {
      params,
    });
  }
}

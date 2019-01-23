import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(postType : string, params) : Observable<any[]> {
    return this.http.get<any[]>(`https://www.oxygenna.com/wp-json/wp/v2/${postType}`, {
      params,
    });
  }
}

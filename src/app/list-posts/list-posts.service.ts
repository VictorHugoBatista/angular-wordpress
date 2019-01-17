import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListPostsService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>('https://www.oxygenna.com/wp-json/wp/v2/posts', {
      params: {
        per_page: '6'
      }
    });
  }
}

import { Injectable } from '@angular/core';

import {HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularDjangoService {

  constructor(private http: HttpClient) { }

  getAllTalks(): Observable<any>{
    return this.http
    // .get("https://jsonplaceholder.typicode.com/posts");
    .get("http://127.0.0.1:8000/api/agenda/");    
  }

  getFilteredTalks(filter?): Observable<any>{
    // const params = new URLSearchParams();
    // params.set('search',
    //   JSON.stringify({
    //     '*': {'operator': 'fuzzy', 'value': {'query': filter}}
    //   }));

    // console.log('getFilteredTalks - filter: '+filter)

      let params = new HttpParams();
      params = params.set('search', filter);

      return this.http
      // .get("https://jsonplaceholder.typicode.com/posts");
      // .get("../assets/config.json", {params});
        .get("http://127.0.0.1:8000/api/agenda/", {params});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IReports, Likes } from './report';

import { delay, map } from 'rxjs/operators';

@Injectable()
export class RestService {
  private url: string =
    'https://5f46781ce165a60016ba9b84.mockapi.io/api/v1/reports/';

  constructor(private http: HttpClient) {}

  /* GET Requests */

  getReports(): Observable<IReports[]> {
    delay(100);
    return this.http.get<IReports[]>(this.url).pipe(
      map((reports: any) => {
        console.log(reports);
        return reports;
      })
    );
  }
  getLikes(id: number): Observable<Likes[]> {
    delay(100);
    return this.http.get<Likes[]>(this.url + id + '/likes').pipe(
      map((likes: any) => {
        console.log(likes);
        return likes;
      })
    );
  }

  /* POST Requests */
  addReport(data: IReports): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post(this.url, body, { headers: headers });
  }
}

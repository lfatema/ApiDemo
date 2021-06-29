import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReports, Likes } from './report';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable()
export class RestService {
  private url: string =
    'https://5f46781ce165a60016ba9b84.mockapi.io/api/v1/reports';

  constructor(private http: HttpClient) {}

  /* Create Requests */

  getReports(): Observable<IReports[]> {
    delay(100);
    let _url = this.url + '?page=1&limit=10';
    return this.http.get<IReports[]>(_url).pipe(
      map((reports: any) => {
        console.log(reports);
        return reports;
      })
    );
  }

  // getLikes(id: number): Observable<Likes[]> {
  //   delay(100);
  //   return this.http.get<Likes[]>(this.url + id + '/likes').pipe(
  //     map((likes: any) => {
  //       console.log(likes);
  //       return likes;
  //     })
  //   );
  // }

  /* Read Requests */
  editReport(report: IReports): Observable<any> {
    return this.http.put(this.url + '/' + report.id, report);
  }
  /* Update Requests */
  addReport(report: IReports): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(report);
    return this.http.post(this.url, body, { headers: headers });
  }

  /* DELETE Requests */
  deleteReport(id: number): Observable<IReports> {
    return this.http.delete<IReports>(this.url + '/' + id);
  }
}

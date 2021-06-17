import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReports } from './report';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url: string =
    'https://5f46781ce165a60016ba9b84.mockapi.io/api/v1/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<IReports[]> {
    return this.http.get<IReports[]>(this.url);
  }
}

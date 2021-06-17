import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reports {}

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url = 'https://5f46781ce165a60016ba9b84.mockapi.io/api/v1/reports';
  constructor(private http: HttpClient) {}

  getReports() {
    return this.http.get(this.url);
  }
}

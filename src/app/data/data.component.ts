import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  public reports: any[] = [];
  public likes: any[] = [];
  public id = 8;
  public reportId!: number;
  constructor(private restService: RestService) {}

  ngOnInit() {
    this.getReports();
    this.getlikes();
  }

  getReports() {
    this.restService.getReports().subscribe((data) => (this.reports = data));
  }

  getlikes() {
    this.restService
      .getLikes(8)
      .subscribe((reportId) => (this.likes = reportId));
  }
}

// getlikes() {
//   this.restService.getLikes(8).subscribe((Likes: any) => {
//     return Likes;
//   });

import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { Likes } from '../services/report';

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
    debugger;
  }

  getReports() {
    this.restService.getReports().subscribe((data) => {
      this.reports = data;

      this.reports.map((r) => {
        this.getlikes(r);
      });
    });
  }

  public getlikes(report: any) {
    this.restService.getLikes(report.id).subscribe((data: Likes[]) => {
      report.likes = data;
    });
  }

  //openModal();
}

// getlikes() {
//   this.restService.getLikes(8).subscribe((Likes: any) => {
//     return Likes;
//   });

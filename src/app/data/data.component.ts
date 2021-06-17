import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  reports: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getReports().subscribe((response) => {
      this.reports = response.json();
    });
  }
}

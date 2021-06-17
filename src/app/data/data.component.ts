import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  public reports: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getReports().subscribe((data) => (this.reports = data));
  }
}

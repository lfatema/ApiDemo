import { Likes } from './../services/report';
import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';

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
  public closeResult: string | undefined;
  constructor(
    private restService: RestService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getReports();
  }

  //Get Reports
  getReports() {
    this.restService.getReports().subscribe((data) => {
      this.reports = data;

      // this.reports.map((r) => {
      //   this.getlikes(r);
      // });
    });
  }

  public getlikes(report: any) {
    this.restService.getLikes(report.id).subscribe((data: Likes[]) => {
      report.likes = data;
      this.likes = data;
    });
  }

  //Create Reports
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((content) => {
        // this.closeResult = `Closed with: ${result}`;
        this.restService.addReport(content).subscribe((data) => {
          console.log(data);
          this.getReports();
        });
      });
  }

  onSubmit(f: NgForm) {
    this.restService.addReport(f.value).subscribe((content) => {
      this.ngOnInit();
    });
    this.modalService.dismissAll();
  }
}

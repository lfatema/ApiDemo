import { Likes, IReports } from './../services/report';
import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  editForm!: FormGroup;
  constructor(
    private restService: RestService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getReports();
    this.editForm = this.fb.group({
      id: [],
      createdAt: [''],
      updatedAt: [''],
      deviceNumber: [''],
      deviceInfo: [''],
    });
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
        this.closeResult = `Closed with: ${content}`;
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

  //Read Reports
  openDetails(targetModal: any, report: IReports) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    // document.getElementById('id_rep').setAttribute('value', report.id);
    // document
    //   .getElementById('createdAt_rep')
    //   .setAttribute('value', report.createdAt);
    // document
    //   .getElementById('updatedAt_rep')
    //   .setAttribute('value', report.updatedAt);
    // document
    //   .getElementById('deviceNum_rep')
    //   .setAttribute('value', report.deviceNumber);
    // document
    //   .getElementById('deviceInfo_rep')
    //   .setAttribute('value', report.deviceInfo);
  }

  //Edit Reports

  openEdit(targetModal: any, report: IReports) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.editForm.patchValue({
      id: report.id,
      deviceNum: report.deviceNumber,
      deviceInfo: report.deviceInfo,
    });
  }
}

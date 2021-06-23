import { Likes, IReports } from './../services/report';
import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  public reports: any[] = [];
  public likes: any[] = [];
  public reportId!: number;
  closeResult!: string;
  selectedReported: any;
  editForm!: FormGroup;
  constructor(
    private restService: RestService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private http: HttpClient
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

  //Get Likes
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
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          // this.restService.addReport(content).subscribe((data) => {
          //   console.log(data);
          //   this.getReports();
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    this.http
      .post('https://5f46781ce165a60016ba9b84.mockapi.io/api/v1/reports/', f)
      .subscribe((result) => {
        console.log('Result: ', result);
      });
    // this.restService.addReport(f.value).subscribe((content) => {
    this.ngOnInit();
    // console.log(content);
    // });
    this.modalService.dismissAll();
  }

  //Read Reports
  openDetails(targetModal: any, report: number) {
    //this.selectedReported = report;
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.restService.getReports();
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

  //Delete Reports

  deleteReport(id: number) {
    this.restService
      .deleteReport(id)
      .subscribe(() => console.log('Report Deleted'));
  }
  openDelete(targetModal: any, report: IReports) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }

  // onDelete() {
  //   this.modalService.delete(this.reportId).subscribe((data) => {
  //     this.ngOnInit();
  //     this.modalService.dismissAll();
  //   });
}

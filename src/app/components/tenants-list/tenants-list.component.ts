import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TenantFormComponent } from '../tenant-form/tenant-form.component';
import { TenantServiceService } from '../tenant-service.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit {

  bsModalRef: BsModalRef;
  list:any = [];
  constructor(private modalService: BsModalService, private tenantService: TenantServiceService) {}
  ngOnInit() {
    this.getTenantList();
  }

  openEditModel(data) {
    console.log("Opening edit model");
    this.bsModalRef = this.modalService.show(TenantFormComponent, {initialState: {title: "PG Mgmt", data}});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  createModel() {
    this.bsModalRef = this.modalService.show(TenantFormComponent, {initialState: {title: "PG Mgmt"}});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  confirmDeletion() {
    console.log("Confirming deletion")
  }

  getTenantList () {
    this.tenantService.getTenantList().subscribe(res => {
      this.list = res;
    }, err => {
      alert(err.message);
    });
  }
}

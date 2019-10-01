import { Component, OnInit, TemplateRef } from '@angular/core';
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
  id;
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

  getTenantList () {
    this.tenantService.getTenantList().subscribe(res => {
      this.list = res;
    }, err => {
      alert(err.message);
    });
  }

  confirmDeletion(template: TemplateRef<any>, id) {
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.id = id;
  }
 
  confirm(): void {
    // this.message = 'Confirmed!';
    this.bsModalRef.hide();
    if(this.id) {
      const body = { tenantId: this.id};
      this.tenantService.deleteTenant(body).subscribe(res => {
        this.list = this.list.filter((l) => l._id.toString() !== this.id.toString());
        alert(res['message']);
      }, err => {
        alert(err['message']);
      })
    }
  }
 
  decline(): void {
    // this.message = 'Declined!';
    this.bsModalRef.hide();
  }
}

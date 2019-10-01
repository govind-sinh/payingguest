import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { TenantServiceService } from '../tenant-service.service';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.css']
})
export class TenantFormComponent implements OnInit {

  tenantDetailForm;
  data: any = {};

  constructor(public bsModalRef: BsModalRef, private formBuilder: FormBuilder,
    private tenantService: TenantServiceService) { 
    }

  ngOnInit() {
    this.tenantDetailForm = this.formBuilder.group({
      name: '',
      address: '',
      pan: '',
      aadhar: ''
    });
    this.setForm();
  }

  setForm() {
    if (this.data) {
      const { name, address, aadhar, pan} = this.data;
      this.tenantDetailForm.setValue({
        name,
        address,
        aadhar,
        pan
      });
    }
  }

  onSubmit(value) {
    const { name, address, pan, aadhar } = value;
    if (name === '') {
      return alert('Please enter Name');
    } else if(address === '') {
      return alert('Please enter address');
    } else if(pan === '') {
      return alert('Please enter pan number');
    } else if(aadhar === '') {
      return alert('Please enter aadhar number')
    }
    this.tenantService.saveTenant(value).subscribe((res) => {
      this.bsModalRef.hide();
    }, err => {
      alert(err.message);
    });
  }

}

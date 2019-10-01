import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantsListComponent } from './components/tenants-list/tenants-list.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TenantFormComponent } from './components/tenant-form/tenant-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TenantsListComponent,
    TenantFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TenantFormComponent]
})
export class AppModule { }

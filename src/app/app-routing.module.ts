import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsListComponent } from './components/tenants-list/tenants-list.component';

const routes: Routes = [
  { path: '', component: TenantsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

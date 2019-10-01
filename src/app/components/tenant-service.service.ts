import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {
  private url = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) { }

  public getTenantList(){
    return this.httpClient.get(`${this.url}/tenant`);
  }

  public saveTenant(data){
    return this.httpClient.post(`${this.url}/tenant`, data);
  }
  public editTenant(data) {
    return this.httpClient.post(`${this.url}/tenant/edit`, data);
  }
  public deleteTenant(data) {
    return this.httpClient.post(`${this.url}/tenant/remove`, data);
  }
}

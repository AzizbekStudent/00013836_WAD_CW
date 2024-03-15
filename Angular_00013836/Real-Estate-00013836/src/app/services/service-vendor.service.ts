import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Vendor } from '../Models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class ServiceVendorService {

  httpClient = inject(HttpClient)

  constructor() { }

  getAllVendor(){
    return this.httpClient.get<Vendor[]>("http://localhost:5085/api/Vendor/GetAll")
  };

  getByIVendor(id:number){
    return this.httpClient.get<Vendor>("http://localhost:5085/api/Vendor/GetById/" + id)
  };

  createVendor(trader: Vendor){
    return this.httpClient.post<Vendor>("http://localhost:5085/api/Vendor/Create", trader)
  }

  editVendor(trader: Vendor){
    return this.httpClient.put<Vendor>("http://localhost:5085/api/Vendor/Update", trader);
  }

  deleteVendor(id: number){
    return this.httpClient.delete("http://localhost:5085/api/Vendor/Delete/" + id)
  }
}

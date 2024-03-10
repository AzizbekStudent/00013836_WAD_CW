import { Injectable, inject } from '@angular/core';
import { Apartment } from './Models/Apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRealEstateService {
  httpClient = inject(HttpClient)

  constructor() { }

  getAllApartments(){
    return this.httpClient.get<Apartment[]>("http://localhost:5085/api/Apartment/GetAll/")
  };

  getByIdApartment(id:number){
    return this.httpClient.get<Apartment>("http://localhost:5085/api/Apartment/GetById/" + id)
  };

  editApartment(apartment: Apartment){

  }


}

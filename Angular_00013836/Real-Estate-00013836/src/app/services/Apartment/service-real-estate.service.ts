import { Injectable, inject } from '@angular/core';
import { Apartment } from '../../Models/Apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRealEstateService {
  httpClient = inject(HttpClient)

  constructor() { }

  getAllApartments(){
    return this.httpClient.get<Apartment[]>("http://localhost:5085/api/Apartment/GetAll")
  };

  getByIdApartment(id:number){
    return this.httpClient.get<Apartment>("http://localhost:5085/api/Apartment/GetById/" + id)
  };

  createApartment(apartment: Apartment){
    return this.httpClient.post<Apartment>("http://localhost:5085/api/Apartment/Create", apartment)
  }

  editApartment(apartment: Apartment){
    return this.httpClient.put<Apartment>("http://localhost:5085/api/Apartment/Update", apartment);
  }

  deleteApartment(id: number){
    return this.httpClient.delete("http://localhost:5085/api/Apartment/Delete/" + id)
  }
}

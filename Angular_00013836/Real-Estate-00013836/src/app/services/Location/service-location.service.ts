import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocationService {
  // Student ID: 00013836
  httpClient = inject(HttpClient)

  constructor() { }

  getAllLocations(){
    return this.httpClient.get<Location[]>("http://localhost:5085/api/Location/GetAll")
  };

  getByIdLocation(id:number){
    return this.httpClient.get<Location>("http://localhost:5085/api/Location/GetById/" + id)
  };

  createLocation(address: Location){
    return this.httpClient.post<Location>("http://localhost:5085/api/Location/Create", address)
  }

  editLocation(address: Location){
    return this.httpClient.put<Location>("http://localhost:5085/api/Location/Update", address);
  }

  deleteLocation(id: number){
    return this.httpClient.delete("http://localhost:5085/api/Location/Delete/" + id)
  }


}

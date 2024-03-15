import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRealEstateService } from '../../../services/service-real-estate.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  router = inject(Router)
  ActivatedRouter = inject(ActivatedRoute)

  RealEstateService = inject(ServiceRealEstateService)

  ApartmentDetails : any = {
    houseTitle: "",
    description: "",
    area: 0,
    price: 0,
    completionDate: null,
    isForRent: false,
    isAvailable: true,
    locationId: 0,
    location_: {
      id: 0,
      city: "",
      region: "",
      street: ""
    },
    vendorId: 0,
    vendor_: {
      fName: "",
      lName: "",
      age: 0,
      birthDate: null
    }
  }

  vendor_ : any
  location_ : any

  ngOnInit(){
    this.RealEstateService.getByIdApartment(this.ActivatedRouter.snapshot.params["id"]).subscribe(
      result =>{this.ApartmentDetails = result
      
      this.location_ = result.location
      this.vendor_ = result.vendor}
    )
  }
}

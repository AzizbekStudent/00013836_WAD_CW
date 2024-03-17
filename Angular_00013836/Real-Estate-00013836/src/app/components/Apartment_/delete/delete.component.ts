import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRealEstateService } from '../../../services/Apartment/service-real-estate.service';

@Component({
  // Student ID: 00013836
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  // Student ID: 00013836
  router = inject(Router)
  ActivatedRouter = inject(ActivatedRoute)
  RealEstateService = inject(ServiceRealEstateService)

  ApartmentDetails : any = {
    id: 0,
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
      
      this.location_ = result.location_
      this.vendor_ = result.vendor_}
    )
  }

  navigateBackToList(){
    this.router.navigateByUrl("Apartment/Home")
  }

  deleteThisApartment(ChosenApartmentDetails: any){
    this.RealEstateService.deleteApartment(ChosenApartmentDetails.id).subscribe(
      result => {
        alert("Apartment is deleted")
        this.router.navigateByUrl("Apartment/Home")
      }
    )
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceRealEstateService } from '../../../services/Apartment/service-real-estate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apartment } from '../../../Models/Apartment';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  // Student ID: 00013836
  selector: 'app-edit',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, CommonModule,MatCheckboxModule, 
    MatChipsModule, FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  // Student ID: 00013836
  ApartmentService = inject(ServiceRealEstateService)
  LocationService = inject(ServiceLocationService)
  VendorService = inject(ServiceVendorService)

  ActivatedRouter = inject(ActivatedRoute)
  router = inject(Router)

  vendorList: any
  v_ID: number = 0;

  locationList : any
  l_ID: number = 0;

  ChosenApartment : any = {
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

  ngOnInit(){
    this.LocationService.getAllLocations().subscribe(
      result => {this.locationList = result}
    )

    this.VendorService.getAllVendor().subscribe(
      result =>{this.vendorList = result}
    )

    this.ApartmentService.getByIdApartment(this.ActivatedRouter.snapshot.params["id"])
    .subscribe(result => {this.ChosenApartment = result})
  }

  EditApartment(){
    
    this.ChosenApartment.location_Id = this.l_ID
    this.ChosenApartment.vendor_Id = this.v_ID


    this.ApartmentService.editApartment(this.ChosenApartment).subscribe(
      result => {
        alert(" Apartment is edited")
        this.router.navigateByUrl("Apartment/Home")
      }
    )
  }

}

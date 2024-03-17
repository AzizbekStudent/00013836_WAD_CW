import { Component, inject } from '@angular/core';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ServiceRealEstateService } from '../../../services/Apartment/service-real-estate.service';
import { Router } from '@angular/router';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  // Student ID: 00013836
  selector: 'app-create',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatChipsModule, 
    FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  // Student ID: 00013836
  ApartmentService = inject(ServiceRealEstateService)
  LocationService = inject(ServiceLocationService)
  VendorService = inject(ServiceVendorService)

  router = inject(Router)

  vendorList: any
  v_ID: number = 0;

  locationList : any
  l_ID: number = 0;

  CreateApartmentForm : any = {
    houseTitle: "",
    description: "",
    area: 0,
    price: 0,
    completionDate: null,
    isForRent: false,
    isAvailable: true,
    location_Id: 0,
    vendor_Id: 0
  }

  ngOnInit(){
    this.LocationService.getAllLocations().subscribe(
      result => {
        this.locationList = result
      }
    )
    this.VendorService.getAllVendor().subscribe(
      result => {
        this.vendorList = result
      }
    )
  }

  CreateApartment(){
    this.CreateApartmentForm.location_Id = this.l_ID
    this.CreateApartmentForm.vendor_Id = this.v_ID

    // Checking that form is passing id from select option
    //console.log(this.l_ID)
    //console.log(this.v_ID)

    this.ApartmentService.createApartment(this.CreateApartmentForm).subscribe(
      result => {
        alert("New Apartment is created")
        this.router.navigateByUrl("Apartment/Home")
      }
    )
  }

}

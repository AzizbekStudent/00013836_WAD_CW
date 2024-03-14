import { Component, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { ServiceRealEstateService } from '../../../services/service-real-estate.service';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatCheckboxModule, MatChipsModule, FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  ApartmentService = inject(ServiceRealEstateService)

  router = inject(Router)

  vendor_Object: any;
  v_ID: number = 0;

  location_object: any;
  l_ID: number = 0;

  CreateApartmentForm : any = {
    houseTitle: "",
    description: "",
    area: 0,
    price: 0,
    completionDate: null,
    isForRent: false,
    isAvailable: true,
    locationId: 0,
    vendorId: 0
  }

  ngOnInit(){
    this.ApartmentService.GetAllLocations().subscribe(result => {
      this.location_object = result
    } )

    this.ApartmentService.GetAllVendors().subscribe(result => {
      this.vendor_Object = result
    } )
  }

  CreateApartment(){
    this.CreateApartmentForm.locationId = this.l_ID
    this.CreateApartmentForm.vendorId = this.v_ID

    this.ApartmentService.createApartment(this.CreateApartmentForm).subscribe(
      result => {
        alert("New Apartment is created")
        this.router.navigateByUrl("Apartment/Home")
      }
    )
  }

}

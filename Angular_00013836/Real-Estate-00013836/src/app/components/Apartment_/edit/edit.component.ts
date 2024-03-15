import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceRealEstateService } from '../../../services/service-real-estate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apartment } from '../../../Models/Apartment';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,MatCheckboxModule, MatChipsModule, FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  ApartmentService = inject(ServiceRealEstateService)

  ActivatedRouter = inject(ActivatedRoute)
  router = inject(Router)

  vendor_Object: any;
  v_ID: any = 0;

  location_object: any;
  l_ID: any = 0;

  EditApartmentForm : any = {
    id: 0,
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
    this.ApartmentService.getByIdApartment(this.ActivatedRouter.snapshot.params["id"]).subscribe(
      result => {
        this.EditApartmentForm.id = result.id;
        this.EditApartmentForm.houseTitle = result.houseTitle;
        this.EditApartmentForm.description = result.description;
        this.EditApartmentForm.area = result.area;
        this.EditApartmentForm.price = result.price;
        this.EditApartmentForm.completionDate = result.completionDate;
        this.EditApartmentForm.isForRent = result.isForRent;
        this.EditApartmentForm.isAvailable = result.isAvailable;
        this.EditApartmentForm.locationId = result.locationId;
        this.EditApartmentForm.vendorId = result.vendorId;

        this.location_object = result.location;
        this.vendor_Object = result.vendor;

        this.v_ID = result.vendorId
        this.l_ID = result.locationId
      }
    );

    this.ApartmentService.GetAllLocations().subscribe(result => {
      this.location_object = result
    } )

    this.ApartmentService.GetAllVendors().subscribe(result => {
      this.vendor_Object = result
    } )
    
  }

  EditApartment(){
    

    this.ApartmentService.editApartment(this.EditApartmentForm).subscribe(
      result => {
        alert(" Apartment is edited")
        this.router.navigateByUrl("Apartment/Home")
      }
    )
  }

}

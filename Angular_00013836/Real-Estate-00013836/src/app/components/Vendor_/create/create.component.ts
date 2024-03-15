import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule,  MatChipsModule, FormsModule,  MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class Vendor_CreateComponent {
  vendorService = inject(ServiceVendorService)

  router = inject(Router)

  newVendor: any  = {
    id: 0,
    fName: "",
    lName: "",
    age:0,
    birthDate: null
  } 

  calculateAge(birthdate: Date): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
  
  
  CreateNewVendor(){

    this.newVendor.age = this.calculateAge(this.newVendor.birthDate);
    
    this.vendorService.createVendor(this.newVendor).subscribe(
      result => {
        alert("New Vendor is created")
      this.router.navigateByUrl("Vendor/Home")
      }
    )
  }
}

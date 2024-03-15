import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceVendorService } from '../../../services/service-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule,  MatChipsModule, FormsModule,  MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class Vendor_EditComponent {
  vendorService = inject(ServiceVendorService)
  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)

  ChosenVendor: any  = {
    id: 0,
    fName: "",
    lName: "",
    age:0,
    birthDate: null
  } 

  ngOnInit(){
    this.vendorService.getByIVendor(this.activatedRouter.snapshot.params["id"]).subscribe(
      result => {
        this.ChosenVendor = result}
    )
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

  EditChosenVendor(){

    this.ChosenVendor.age = this.calculateAge(this.ChosenVendor.birthDate);
    this.vendorService.editVendor(this.ChosenVendor).subscribe(
      result => {
        alert("Vendor is updated")
      this.router.navigateByUrl("Vendor/Home")
      }
    )
  }

  navigateBackToList(){
    this.router.navigateByUrl("Vendor/Home")
  }
}

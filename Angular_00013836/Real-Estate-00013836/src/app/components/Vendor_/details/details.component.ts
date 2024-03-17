import { Component, inject } from '@angular/core';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  // Student ID: 00013836
  selector: 'app-details',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class Vendor_DetailsComponent {
  // Student ID: 00013836
  VendorDetails : any={
    id:0,
    fName:"",
    lName:"",
    age:0,
    birthDate: null
  }

  /*  I do not know why the following code is not working
  VendorDetails : Vendor={
    id:0,
    fName:"",
    lName:"",
    age:0,
    birthDate: null
  }
  */

  constructor(private datePipe: DatePipe) {}

  formatCompletionDate(date: Date): string {
    return this.datePipe.transform(date, 'dd.MM.yyyy HH:mm:ss') || '';
  }

  vendorService = inject(ServiceVendorService)
  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)


  ngOnInit(){
    this.vendorService.getByIVendor(this.activatedRouter.snapshot.params["id"]).subscribe(
      result => {this.VendorDetails = result}
    )
  }

  navigateBackToList(){
    this.router.navigateByUrl("Vendor/Home")
  }


}

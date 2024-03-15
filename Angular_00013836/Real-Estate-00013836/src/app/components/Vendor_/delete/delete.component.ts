import { Component, inject } from '@angular/core';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  providers:[DatePipe],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class Vendor_DeleteComponent {
  VendorDetails : any={
    id:0,
    fName:"",
    lName:"",
    age:0,
    birthDate: null
  }


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


  deleteThisVendor(VendorDetails: any){
    this.vendorService.deleteVendor(VendorDetails.id).subscribe(
      result => {
        alert("Vendor is deleted")
        this.router.navigateByUrl("Vendor/Home")
      }
    )
  }
}

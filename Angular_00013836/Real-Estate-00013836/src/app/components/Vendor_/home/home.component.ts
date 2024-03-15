import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Vendor_CreateComponent } from '../create/create.component';
import { Vendor } from '../../../Models/Vendor';
import { Router } from '@angular/router';
import { ServiceVendorService } from '../../../services/service-vendor.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, Vendor_CreateComponent],
  providers:[DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Vendor_HomeComponent {
  VendorList: Vendor[] =[]

  router = inject(Router)

  vendorService = inject(ServiceVendorService)

  ngOnInit(){
    this.vendorService.getAllVendor().subscribe((result) => (this.VendorList = result) )
  }

  constructor(private datePipe: DatePipe) {}

  formatCompletionDate(date: Date): string {
    return this.datePipe.transform(date, 'dd.MM.yyyy HH:mm:ss') || '';
  }

  displayedColumns: string[] = ['fName', 'lName', 'age', 'birthDate','actions'];

  EditClicked(vendorId: number){
    this.router.navigateByUrl(`Vendor/Edit/${vendorId}`);
  }

  DeleteClicked(vendorId: number){
    this.router.navigateByUrl(`Vendor/Delete/${vendorId}`);
  }

  DetailsClicked(vendorId: number){
    this.router.navigateByUrl(`Vendor/Details/${vendorId}`);
  }

  CreateNew(){
    this.router.navigateByUrl("Vendor/Create");
  }

}

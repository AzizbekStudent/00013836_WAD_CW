import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Vendor_CreateComponent } from '../create/create.component';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceVendorService } from '../../../services/Vendor/service-vendor.service';
import { Vendor } from '../../../Models/Vendor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatButtonModule, 
    Vendor_CreateComponent, MatInputModule],
  providers: [DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class Vendor_SearchComponent {
  router = inject(Router)

  vendorService = inject(ServiceVendorService)
  ActivatedRouter = inject(ActivatedRoute)

  @Input() apartments:any;

  VendorList: Vendor[] = []

  searchText: any

  ngOnInit(){

    this.ActivatedRouter.params.subscribe(params => {
      this.searchText = params['string']; 
      this.VendorList = this.filterResults(); 
    });
    console.log(this.searchText)

  }

  filterResults(): any {
    if (this.searchText === "") {
      this.router.navigateByUrl("Vendor/Home");
    } else {
      this.vendorService.getAllVendor().subscribe((result: any) => {
        this.VendorList = (result as Vendor[]).filter(v =>
          v.fName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          v.lName.toLowerCase().includes(this.searchText.toLowerCase()) 
        );
      });
    }
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

  SearchByInput(textToSearch: string) {
    if (textToSearch === "") {
        this.router.navigateByUrl("Vendor/Home");
    } else {
        this.router.navigateByUrl(`Vendor/Search/${textToSearch}`);
    }
  }
}

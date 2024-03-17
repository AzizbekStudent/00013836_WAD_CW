import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRealEstateService } from '../../../services/Apartment/service-real-estate.service';
import { Apartment } from '../../../Models/Apartment';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from '../create/create.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  // Student ID: 00013836
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatButtonModule, 
    CreateComponent, MatInputModule, MatCheckbox],
  providers: [DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  // Student ID: 00013836
  router = inject(Router)

  RealEstateService = inject(ServiceRealEstateService)
  ActivatedRouter = inject(ActivatedRoute)

  @Input() apartments:any;
  
  ApartmentList: Apartment[] = []

  searchText: any

  showAvailableOnly: boolean = false;

  showForRentOnly: boolean = false;

  ngOnInit(){

    this.ActivatedRouter.params.subscribe(params => {
      this.searchText = params['string']; 
      this.ApartmentList = this.filterResults(); 
    });
    console.log(this.searchText)

  }

  filterResults(): any {
    if (this.searchText === "") {
      this.router.navigateByUrl("Apartment/Home");
    }else{
      this.RealEstateService.getAllApartments().subscribe((result: Apartment[]) => {
        this.ApartmentList = result.filter(apartment =>
          apartment.houseTitle.toLowerCase().includes(this.searchText.toLowerCase()) ||
          apartment.description.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    }
  }

  displayedColumns: string[] = ['id', 'houseTitle', 'description', 'area', 'price', 'completionDate', 'isForRent', 'isAvailable','Actions'];
  
  constructor(private datePipe: DatePipe) {}

  formatCompletionDate(date: Date): string {
    return this.datePipe.transform(date, 'dd.MM.yyyy HH:mm:ss') || '';
  }

  EditClicked(apartmentID: number){
    this.router.navigateByUrl(`Apartment/Edit/${apartmentID}`);
  }

  DeleteClicked(apartmentID: number){
    this.router.navigateByUrl(`Apartment/Delete/${apartmentID}`);
  }

  DetailsClicked(apartmentID: number){
    this.router.navigateByUrl(`Apartment/Details/${apartmentID}`);
  }

  CreateNew(){
    this.router.navigateByUrl("Apartment/Create");
  }
 
  SearchByInput(textToSearch: string) {
    if (textToSearch === "") {
        this.router.navigateByUrl("Apartment/Home");
    } else {
        this.router.navigateByUrl(`Apartment/Search/${textToSearch}`);
    }
  }

  filterByAvailability() {
    if (this.showAvailableOnly) {
      this.ApartmentList = this.ApartmentList.filter(apartment => apartment.isAvailable);
    } else {
      this.RealEstateService.getAllApartments().subscribe((result) => (this.ApartmentList = result));
    }
  }

  filterByRentability() {
    if (this.showForRentOnly) {
      this.ApartmentList = this.ApartmentList.filter(apartment => apartment.isForRent);
    } else {
      this.RealEstateService.getAllApartments().subscribe((result) => (this.ApartmentList = result));
    }
  }
}

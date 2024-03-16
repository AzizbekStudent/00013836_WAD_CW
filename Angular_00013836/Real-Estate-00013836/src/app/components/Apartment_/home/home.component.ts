import { Component, Input, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Apartment } from '../../../Models/Apartment';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ServiceRealEstateService } from '../../../services/Apartment/service-real-estate.service';
import { Router } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, FormsModule, MatTableModule, MatButtonModule, 
    CreateComponent, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe]
})



export class HomeComponent {

  router = inject(Router)

  RealEstateService = inject(ServiceRealEstateService)

  @Input() apartments:any;
  
  ApartmentList: Apartment[] = []

  searchText: string = ""


  ngOnInit(){
    this.RealEstateService.getAllApartments().subscribe((result) => (this.ApartmentList = result) )
  }
  displayedColumns: string[] = ['id', 'houseTitle', 'description', 'area', 'price', //'completionDate', 'isForRent', 'isAvailable',
  'Actions'];
  
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
}

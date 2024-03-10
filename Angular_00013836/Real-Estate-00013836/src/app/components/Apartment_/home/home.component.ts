import { Component, Input, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Apartment } from '../../../Models/Apartment';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ServiceRealEstateService } from '../../../service-real-estate.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe]
})



export class HomeComponent {

 RealEstateService = inject(ServiceRealEstateService)
  
  @Input() apartments:any;
  
  ApartmentList: Apartment[] = []

  ngOnInit(){
    this.RealEstateService.getAllApartments().subscribe((result) => (this.ApartmentList = result) )
  }
  displayedColumns: string[] = ['id', 'houseTitle', 'description', 'area', 'price', 'completionDate', 'isForRent', 'isAvailable','Actions'];
  
  constructor(private datePipe: DatePipe) {}

  formatCompletionDate(date: Date): string {
    return this.datePipe.transform(date, 'dd.MM.yyyy HH:mm:ss') || '';
  }

  EditClicked(apartmentID: number){
    console.log(apartmentID, "Edit clicked")
  }

  DeleteClicked(apartmentID: number){
    console.log(apartmentID, "Delete clicked")
  }

  DetailsClicked(apartmentID: number){
    console.log(apartmentID, "Details clicked")
  }

  CreateNew(){
    console.log("Create new record clicked")
  }
 
}

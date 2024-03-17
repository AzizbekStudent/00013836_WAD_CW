import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { Location_CreateComponent } from '../create/create.component';
import { Location_SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  // Student ID: 00013836
  selector: 'app-home',
  standalone: true,
  imports: [Location_SearchComponent, FormsModule, MatTableModule, MatButtonModule, Location_CreateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Location_HomeComponent {
  // Student ID: 00013836

  LocationList: Location[] = []
  
  router = inject(Router)

  locationService = inject(ServiceLocationService)

  searchText: string =""

  ngOnInit(){
    this.locationService.getAllLocations().subscribe((result) => (this.LocationList = result) )
  }

  displayedColumns: string[] = ['city', 'region', 'street', 'actions'];


  EditClicked(locationID: number){
    this.router.navigateByUrl(`Location/Edit/${locationID}`);
  }

  DeleteClicked(locationID: number){
    this.router.navigateByUrl(`Location/Delete/${locationID}`);
  }

  DetailsClicked(locationID: number){
    this.router.navigateByUrl(`Location/Details/${locationID}`);
  }

  CreateNew(){
    this.router.navigateByUrl("Location/Create");
  }

  SearchByInput(textToSearch: string) {
    if (textToSearch === "") {
        this.router.navigateByUrl("Location/Home");
    } else {
        this.router.navigateByUrl(`Location/Search/${textToSearch}`);
    }
  }
}

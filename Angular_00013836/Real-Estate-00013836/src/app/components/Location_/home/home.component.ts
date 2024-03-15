import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceLocationService } from '../../../services/service-location.service';
import { Location_CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, Location_CreateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Location_HomeComponent {

  LocationList: Location[] = []
  
  router = inject(Router)

  locationService = inject(ServiceLocationService)


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
}

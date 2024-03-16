import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Location_CreateComponent } from '../create/create.component';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { Location } from '../../../Models/Location';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatButtonModule, 
    Location_CreateComponent, MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class Location_SearchComponent {
  router = inject(Router)

  LocationService = inject(ServiceLocationService)
  ActivatedRouter = inject(ActivatedRoute)

  @Input() apartments:any;
  
  LocationList: Location[] = []

  searchText: any

  ngOnInit(){

    this.ActivatedRouter.params.subscribe(params => {
      this.searchText = params['string']; 
      this.LocationList = this.filterResults(); 
    });
    console.log(this.searchText)

  }

  filterResults(): any {
    if (this.searchText === "") {
      this.router.navigateByUrl("Location/Home");
    } else {
      this.LocationService.getAllLocations().subscribe((result: any) => {
        this.LocationList = (result as Location[]).filter(l =>
          l.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
          l.region.toLowerCase().includes(this.searchText.toLowerCase()) ||
          l.street.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    }
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

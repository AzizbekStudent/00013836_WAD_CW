import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // Student ID: 00013836
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class Location_DetailsComponent {
  // Student ID: 00013836
   LocationDetails : any={
    id:0,
    city:"",
    region:"",
    street:""
  }

  /*  I do not know why the following code is not working ???
  LocationDetails : Location={
    id:0,
    city:"",
    region:"",
    street:""
  }*/

  locationService = inject(ServiceLocationService)
  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.locationService.getByIdLocation(this.activatedRouter.snapshot.params["id"]).subscribe(
      result => {this.LocationDetails = result}
    )
  }

  navigateBackToList(){
    this.router.navigateByUrl("Location/Home")
  }

}

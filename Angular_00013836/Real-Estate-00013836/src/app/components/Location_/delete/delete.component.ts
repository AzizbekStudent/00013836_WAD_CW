import { Component, inject } from '@angular/core';
import { ServiceLocationService } from '../../../services/service-location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class Location_DeleteComponent {
  
  LocationDetails : any={
    id:0,
    city:"",
    region:"",
    street:""
  }

  locationService = inject(ServiceLocationService)
  activatedRouter = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.locationService.getByIdLocation(this.activatedRouter.snapshot.params["id"]).subscribe(
      result => {this.LocationDetails = result}
    )
  }

  deleteThisLocation(LocationDetails: any){
    this.locationService.deleteLocation(LocationDetails.id).subscribe(
      result => {
        alert("Location is deleted")
        this.router.navigateByUrl("Location/Home")
      }
    )
  }

  navigateBackToList(){
    this.router.navigateByUrl("Location/Home")
  }
}

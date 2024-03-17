import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // Student ID: 00013836
  selector: 'app-edit',
  standalone: true,
  imports: [MatChipsModule, FormsModule,  MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class Location_EditComponent {
  // Student ID: 00013836
  locationService = inject(ServiceLocationService)
  activatedRouter = inject(ActivatedRoute)

  router = inject(Router)

  ChosenLocation: any  = {
    id: 0,
    city: "",
    region: "",
    street:""
  } 

  ngOnInit(){
    this.locationService.getByIdLocation(this.activatedRouter.snapshot.params["id"]).subscribe(
      result => {
        this.ChosenLocation = result}
    )
  }

  EditChosenLocation(){
    this.locationService.editLocation(this.ChosenLocation).subscribe(
      result => {
        alert("Location is updated")
      this.router.navigateByUrl("Location/Home")
      }
    )
  }
  navigateBackToList(){
    this.router.navigateByUrl("Location/Home")
  }
}

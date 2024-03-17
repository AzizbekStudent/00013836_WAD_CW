import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceLocationService } from '../../../services/Location/service-location.service';
import { Router } from '@angular/router';

@Component({
  // Student ID: 00013836
  selector: 'app-create',
  standalone: true,
  imports: [ MatChipsModule, FormsModule,  MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class Location_CreateComponent {
  // Student ID: 00013836
  locationService = inject(ServiceLocationService)

  router = inject(Router)

  newLocation: any  = {
    id: 0,
    city: "",
    region: "",
    street:""
  } 

  CreateNewLocation(){
    this.locationService.createLocation(this.newLocation).subscribe(
      result => {
        alert("New Location is created")
      this.router.navigateByUrl("Location/Home")
      }
    )
  }

}

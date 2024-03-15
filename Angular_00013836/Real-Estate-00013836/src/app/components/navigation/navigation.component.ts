import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { HomeComponent } from '../Apartment_/home/home.component';
import { Location_HomeComponent } from '../Location_/home/home.component';
import { Vendor_HomeComponent } from '../Vendor_/home/home.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, HomeComponent, Location_HomeComponent, Vendor_HomeComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
    router = inject(Router)

    ApartmentClick(){
      this.router.navigateByUrl("Apartment/Home");
    }

    LocationClick(){
      this.router.navigateByUrl("Location/Home");
    }

    VendorClick(){
      this.router.navigateByUrl("Vendor/Home");
    }

    HomeIconClick(){
      this.router.navigateByUrl("");
    }
}

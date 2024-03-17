import { Routes } from '@angular/router';
import { HomeComponent } from './components/Apartment_/home/home.component';
import { EditComponent } from './components/Apartment_/edit/edit.component';
import { DetailsComponent } from './components/Apartment_/details/details.component';
import { DeleteComponent } from './components/Apartment_/delete/delete.component';
import { CreateComponent } from './components/Apartment_/create/create.component';
import { Location_HomeComponent } from './components/Location_/home/home.component';
import { Location_EditComponent } from './components/Location_/edit/edit.component';
import { Location_DetailsComponent } from './components/Location_/details/details.component';
import { Location_DeleteComponent } from './components/Location_/delete/delete.component';
import { Location_CreateComponent } from './components/Location_/create/create.component';
import { Vendor_HomeComponent } from './components/Vendor_/home/home.component';
import { Vendor_EditComponent } from './components/Vendor_/edit/edit.component';
import { Vendor_DetailsComponent } from './components/Vendor_/details/details.component';
import { Vendor_DeleteComponent } from './components/Vendor_/delete/delete.component';
import { Vendor_CreateComponent } from './components/Vendor_/create/create.component';
import { SearchComponent } from './components/Apartment_/search/search.component';
import { Location_SearchComponent } from './components/Location_/search/search.component';
import { Vendor_SearchComponent } from './components/Vendor_/search/search.component';

export const routes: Routes = [
    // Student ID: 00013836
    {
        path: "",
        component:HomeComponent
    },
    {
        path: "Apartment/Home",
        component:HomeComponent
    },
    {
        path: "Apartment/Edit/:id",
        component:EditComponent
    },
    {
        path: "Apartment/Details/:id",
        component:DetailsComponent
    },
    {
        path: "Apartment/Delete/:id",
        component:DeleteComponent
    },
    {
        path: "Apartment/Create",
        component:CreateComponent
    },
    {
        path: "Apartment/Search/:string",
        component:SearchComponent
    },
    // Location routes
    {
        path: "Location/Home",
        component:Location_HomeComponent
    },
    {
        path: "Location/Edit/:id",
        component:Location_EditComponent
    },
    {
        path: "Location/Details/:id",
        component: Location_DetailsComponent
    },
    {
        path: "Location/Delete/:id",
        component: Location_DeleteComponent
    },
    {
        path: "Location/Create",
        component:Location_CreateComponent
    },
    {
        path: "Location/Search/:string",
        component:Location_SearchComponent
    },

    // Vendor routes
    {
        path: "Vendor/Home",
        component: Vendor_HomeComponent
    },
    {
        path: "Vendor/Edit/:id",
        component:Vendor_EditComponent
    },
    {
        path: "Vendor/Details/:id",
        component: Vendor_DetailsComponent
    },
    {
        path: "Vendor/Delete/:id",
        component: Vendor_DeleteComponent
    },
    {
        path: "Vendor/Create",
        component:Vendor_CreateComponent
    },
    {
        path: "Vendor/Search/:string",
        component:Vendor_SearchComponent
    }
];

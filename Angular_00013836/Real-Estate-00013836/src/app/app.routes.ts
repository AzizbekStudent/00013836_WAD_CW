import { Routes } from '@angular/router';
import { HomeComponent } from './components/Apartment_/home/home.component';
import { EditComponent } from './components/Apartment_/edit/edit.component';
import { DetailsComponent } from './components/Apartment_/details/details.component';
import { DeleteComponent } from './components/Apartment_/delete/delete.component';

export const routes: Routes = [
    {
        path: "",
        component:HomeComponent
    },
    {
        path: "home",
        component:HomeComponent
    },
    {
        path: "edit/:id",
        component:EditComponent
    },
    {
        path: "details/:id",
        component:DetailsComponent
    },
    {
        path: "delete/:id",
        component:DeleteComponent
    },
];

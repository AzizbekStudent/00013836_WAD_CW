import { Routes } from '@angular/router';
import { HomeComponent } from './components/Apartment_/home/home.component';
import { EditComponent } from './components/Apartment_/edit/edit.component';
import { DetailsComponent } from './components/Apartment_/details/details.component';
import { DeleteComponent } from './components/Apartment_/delete/delete.component';
import { CreateComponent } from './components/Apartment_/create/create.component';

export const routes: Routes = [
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
];

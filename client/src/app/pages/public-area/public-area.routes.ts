import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login";

export const PUBLIC_AREA_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    }
]
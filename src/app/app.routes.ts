import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path:'items', component: ItemsComponent},
    {path:'workers', component: WorkersComponent},
    {path:'register', component: RegisterComponent},
    {path:'auth', loadComponent: ()=>import('./pages/auth/auth.component').then(c=>c.AuthComponent)},
];

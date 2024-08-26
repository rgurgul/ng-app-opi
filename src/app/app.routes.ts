import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ItemComponent } from './pages/items/components/item/item.component';

export const routes: Routes = [
    {path:'items', component: ItemsComponent, children:[
        {path:':id', component:ItemComponent}
    ]},
    
    {path:'workers', component: WorkersComponent},
    {path:'register', component: RegisterComponent},
    {path:'auth', loadComponent: ()=>import('./pages/auth/auth.component').then(c=>c.AuthComponent)},
];

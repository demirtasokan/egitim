import {Routes} from '@angular/router'
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes:Routes = [
    { path:"products", component:ProductComponent},
    {path:"", component:ProductComponent, pathMatch:"full"},
    {path:"products/:categoryId", component:ProductComponent},
    {path:"register", component:RegisterComponent},
    {path:"productDetail", component:NavComponent}

    
]
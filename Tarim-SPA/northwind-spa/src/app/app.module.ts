import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { VatPipe } from "./pipes/vat.pipe";
import { ProductFilterPipe } from "./pipes/product-filter.pipe";
import { TrmLoginDirective } from "./directives/trmLogin.directive";
import { AdminModule } from "./modules/admin/admin.module";
import { AdminComponent } from "./modules/admin/admin.component";

@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      NavComponent,
      CategoryComponent,
      RegisterComponent,
      VatPipe,
      ProductFilterPipe,
      TrmLoginDirective,
    
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      AdminModule

   ],      
   
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DenemeComponent } from './deneme/deneme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent,DenemeComponent],
  bootstrap:[AdminComponent]
})
export class AdminModule { }

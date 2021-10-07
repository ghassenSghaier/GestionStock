import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [EmployeesComponent, CreateComponent, DetailsComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }

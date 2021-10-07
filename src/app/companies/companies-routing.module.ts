import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import {DetailsComponent} from './details/details.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'details/:companyId', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:companyId', component: UpdateComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) }, { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

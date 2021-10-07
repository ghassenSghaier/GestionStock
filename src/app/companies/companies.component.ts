import { Component, OnInit } from '@angular/core';
import {Company} from './company';
import {CompanyService} from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = [];

  constructor(public companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAll().subscribe((data: Company[]) => {

      this.companies = data;
    });
  }

}

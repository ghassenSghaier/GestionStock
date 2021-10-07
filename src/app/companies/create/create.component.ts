import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  company = {
    name: '',
    address: '',
  };
  submitted = false;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.company.name,
      description: this.company.address
    };

    this.companyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCompany(): void {
    this.submitted = false;
    this.company = {
      name: '',
      address: ''
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {
  selectedEmployee: employee;

  setSelectedEmployee(employee: employee){
    this.selectedEmployee = employee;
    console.log(employee);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { useAnimation } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { employee } from '../employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
@Output() clickedEmployee = new EventEmitter<employee>();

onEmployeeClick(employeeList: employee){
  this.clickedEmployee.emit(employeeList);
}
  employeeList: employee[] = [
    {
      id: 1,
      name: "Usama",
      gender: true,
      role: "Civil Engineer",
    },
    {
      id: 2,
      name: "Qasim",
      gender: true,
      role: "Electrical Engineer",
    },
    {
      id: 3,
      name: "Hamid",
      gender: true,
      role: "Project Manager",
    },
    {
      id: 4,
      name: "Saad",
      gender: true,
      role: "Director",
    },
    {
      id: 5,
      name: "Bilal",
      gender: true,
      role: "Coordinator",
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }

}

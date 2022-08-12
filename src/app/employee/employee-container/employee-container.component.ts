import { Component, Input, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { EmpoloyeeService } from '../empoloyee.service';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {
  selectedEmployee: employee;
  employeeList: employee[];
  @Input() list: employee[];

  setSelectedEmployee(employee: employee){
    this.selectedEmployee = employee;
  }
  constructor(private EmpoloyeeService: EmpoloyeeService) { }

  ngOnInit(): void {
    
    this.list=this.EmpoloyeeService.employeeList;
  }

  setNext(currentEmployee){
  let indx = this.list.indexOf(currentEmployee);
  if(indx==this.list.length-1)
  {
    this.selectedEmployee = this.list[0];
  }
  else{
    this.selectedEmployee = this.list[indx + 1];
  }
  

  }
  setPrev(currentEmployee){
  let indx = this.list.indexOf(currentEmployee);
  if(indx==0)
  {
    this.selectedEmployee = this.list[this.list.length-1];
  }
  else{
    this.selectedEmployee = this.list[indx - 1];
  }
  }
  firstEve(currentEmployee){
    let indx = this.list.indexOf(currentEmployee);
    this.selectedEmployee = this.list[0];
  }
  delEve(currentEmployee){
    let indx = this.list.indexOf(currentEmployee);
    this.list.splice(indx,1);
    this.selectedEmployee=this.list[0];
    
  }
}

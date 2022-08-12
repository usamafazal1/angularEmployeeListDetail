import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() currentEmployee: employee;
  @Output() nextEvent = new EventEmitter<employee>();
  @Output() prevEvent = new EventEmitter<employee>();
  @Output() delEvent = new EventEmitter<employee>();
  @Output() firstEvent = new EventEmitter<employee>();

  constructor() { }

  nextFunc(currentEmployee){
  this.nextEvent.emit(currentEmployee);
  }

  prevFunc(currentEmployee){
    this.prevEvent.emit(currentEmployee);
    }
  ngOnInit(): void {
  }
  firstFunc(currentEmployee){
    this.firstEvent.emit(currentEmployee);
  }
  delFunc(currentEmployee){
    this.delEvent.emit(currentEmployee);
  }

}

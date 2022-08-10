import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



@NgModule({
  declarations: [
    EmployeeContainerComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeContainerComponent
  ]
})
export class EmployeeModule { }

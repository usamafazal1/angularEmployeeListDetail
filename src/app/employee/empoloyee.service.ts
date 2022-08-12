import { Injectable } from '@angular/core';
import {employee} from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmpoloyeeService {
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
    {
      id: 6,
      name: "Shazil",
      gender: true,
      role: "Software Engineer",
    },
    {
      id: 7,
      name: "Usaid",
      gender: true,
      role: "Software Engineer",
    },
    {
      id: 8,
      name: "Sameer",
      gender: true,
      role: "Software Engineer",
    }
  ];
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  User: User = {
    firstName: null,
    lastName: null,
    patronymic: null,
    role: null,
    isActive: null
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

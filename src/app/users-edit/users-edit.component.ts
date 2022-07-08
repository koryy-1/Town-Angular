import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
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

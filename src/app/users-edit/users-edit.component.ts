import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: null,
    lastName: null,
    patronymic: null,
    role: 'user',
    isActive: false
  }
  users: User[] = []

  roles = ['admin', 'operator', 'user']

  warningMessage = ''

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  checkData(): boolean {
    if (this.user?.firstName && this.user.firstName !== ""
    && this.user.lastName && this.user.lastName !== ""
    && this.user.patronymic && this.user.patronymic !== ""
    && this.user.role && this.user.role !== "") {
      return true
    }
    else {
      this.warningMessage = 'some fields are not filled'
      console.log(this.user);
      
      return false
    }
  }

  saveUser() {
    if (this.checkData()) {
      this.users = JSON.parse(localStorage.getItem('Users') as string)
      if (this.users?.length != 0 && this.users[this.users.length - 1].hasOwnProperty('id'))
        this.user.id = this.users[this.users.length - 1].id + 1
      else
        this.user.id = 0

      this.users.push(this.user)
      localStorage.setItem('Users', JSON.stringify(this.users))
      this.router.navigate(['/users'])
    }
  }

}

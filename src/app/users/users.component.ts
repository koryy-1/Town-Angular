import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?: User[] = JSON.parse(localStorage.getItem('Users') as string)
  
  constructor() { }

  ngOnInit(): void {
    // this.deleteDB()
    this.ensureCreatedDB()
    
  }

  deleteDB() {
    localStorage.setItem('Users', '[]')
  }

  ensureCreatedDB() {
    if (!this.users) {
      localStorage.setItem('Users', `[]`)
    }
  }
}

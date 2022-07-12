import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User } from '../models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = JSON.parse(localStorage.getItem('Users') as string)
  
  constructor(private modal: NzModalService) { }

  ngOnInit(): void {
    // this.deleteDB()
    this.ensureCreatedDB()
    
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(n => n.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }

    localStorage.setItem('Users', JSON.stringify(this.users))
  }

  showModal(id: number, firstName: string | null, lastName: string | null) {
    this.modal.confirm({
      nzTitle: `Вы уверены, что хотите удалить пользователя ${firstName} ${lastName}?`,
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteUser(id),
    });

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

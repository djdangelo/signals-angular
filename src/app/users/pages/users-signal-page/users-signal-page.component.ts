import { Component, signal, OnInit, inject, computed } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';
import { currentPage, totalUsers, users } from "../../store/user.store";

@Component({
  selector: 'app-users-signal-page',
  templateUrl: './users-signal-page.component.html',
  styleUrls: ['./users-signal-page.component.css']
})
export class UsersSignalPageComponent implements OnInit {

  public userService = inject(UsersService);

  /*public users = signal<User[]>([]);
  public currentPage = signal<number>(1);

  public totalUsers = computed( () => `Total usuarios: ${this.users().length}`);*/


  get users() {
    return users();
  }

  get currentPage() {
    return currentPage();
  }

  get totalUsers() {
    return totalUsers();
  }

  ngOnInit(): void {
      this.loadPage(currentPage());
  }

  loadPage(page: number) {
    this.userService.loadPage(page)
    .pipe(filter(x => x.length > 0))
    .subscribe(usersN => {
      //this.users.set(users);
      users.update(x => [...x, ...usersN]);
      currentPage.set(page);
      //this.users.set([...this.users(), ...users]);
    })
  }
}

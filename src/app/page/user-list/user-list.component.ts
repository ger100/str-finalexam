import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();




  sorterColName: string = 'id';
  isAscending: boolean = true;

  nameForFilter: string = '';


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();

  }

  selectColumnForSort(col: string): void {
    this.sorterColName === col ? this.isAscending = !this.isAscending : this.isAscending = true;
    this.sorterColName = col;
  }

  onChangeNameForFilter(event: Event): void {
    this.nameForFilter = (event.target as HTMLInputElement).value;
  }

  onDelete(user: User): void {
    if (confirm("Really do you want to delete?")) {
      this.userService.remove(user);
    }
  }

}

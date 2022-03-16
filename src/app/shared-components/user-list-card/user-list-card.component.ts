import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { AddUserFriend } from 'src/app/state-management/actions/general.actions';

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.scss']
})
export class UserListCardComponent implements OnInit {

  @Input() user: User = new User();
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addFriend(){
    this.store.dispatch(new AddUserFriend(this.user))
  }
}

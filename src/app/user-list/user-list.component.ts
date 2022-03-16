import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '../models/User';
import { AuthenticationState } from '../state-management/state/auth.state';
import { GeneralState } from '../state-management/state/general.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user: User = new User();
  userList: User[] = [];
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user = this.store.selectSnapshot( AuthenticationState.getLoggedUser );

    const userFriendsId = '|'+this.user.friends.map((user) => { return user.id }).join('|')+'|';
    this.userList = this.store.selectSnapshot( GeneralState.getUserList )
    .filter((user)=>{ return user.id != this.user.id && !userFriendsId.includes(user.id.toString()) });
  }

}

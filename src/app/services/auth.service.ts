import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthenticationState } from '../state-management/state/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private store: Store ) { }

  isLoggedIn(){
    const user = this.store.selectSnapshot(AuthenticationState.getLoggedUser);
    return user && user.id > 0;
  }
}

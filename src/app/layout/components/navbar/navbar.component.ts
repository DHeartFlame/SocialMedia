import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LogoutUser } from 'src/app/state-management/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private store: Store ) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(new LogoutUser())
  }

}

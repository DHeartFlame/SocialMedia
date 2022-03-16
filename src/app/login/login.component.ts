import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginUser } from '../state-management/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor( private store: Store ) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  login(){
    const credentials = this.loginFormGroup.getRawValue();
    this.store.dispatch( new LoginUser(credentials.userName, credentials.password) );
  }
}

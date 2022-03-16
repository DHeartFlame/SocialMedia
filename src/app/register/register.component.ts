import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { User } from '../models/User';
import { RegisterUser } from '../state-management/actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup: FormGroup;

  constructor( private store: Store, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group(new User);
  }
  register(){
    const user = new User().setValues(this.registerFormGroup.getRawValue());
    this.store.dispatch( new RegisterUser(user) );
  }
}

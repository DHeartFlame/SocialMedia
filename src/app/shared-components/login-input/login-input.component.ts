import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: LoginInputComponent
    }
  ]
})
export class LoginInputComponent implements ControlValueAccessor {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() faIconName?: string;
  public value: string = '';
  public disabled: boolean = false;

  onChange = () => {};
  onTouched = () => {};
  touched = false;

  constructor() { }
  
  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}

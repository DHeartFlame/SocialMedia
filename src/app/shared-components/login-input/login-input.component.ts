import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  @Input() formControlName: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() faIconName?: string;
  public _value: string;
  public disabled: boolean = false;

  touched = false;

  constructor( protected directive: FormGroupDirective ) { }
  
  onChange = ( value: string ) =>
	{
	};
	onTouched = () =>
	{
	};

	writeValue( value: string ): void
	{
		if( typeof value !== 'undefined' )
		{
			this.value = value;
		}
	}

	@Input()
	set value( value: string )
	{
		this._value = value;
		this.onChange( this._value )
	}

	get value()
	{
		return this._value;
	}

  registerOnChange( fn: ( value: any ) => void ): void
	{
		this.onChange = fn;
	}

	registerOnTouched( fn: () => void ): void
	{
		this.onTouched = fn;
	}

	setDisabledState( isDisabled: boolean ): void
	{
		this.disabled = isDisabled;
	}

}

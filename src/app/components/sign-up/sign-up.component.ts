import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { AlertErrorComponent } from "../../shared/ui/alert-error/alert-error.component";
import { confirmPassValidation } from '../../shared/utilits/confirm-password.utilits';
import { signUPVaalidator } from '../../shared/validators/register.validators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, AlertErrorComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  reg = new FormGroup({
    name: new FormControl(null,signUPVaalidator.name),
    email: new FormControl(null,signUPVaalidator.email),
    password: new FormControl(null,signUPVaalidator.password),
    rePassword: new FormControl(null)
    // phone: new FormControl('default Value'),
  },confirmPassValidation)

 
  submidData(){
    if(this.reg.valid){
      console.log(this.reg)
    }
  }
}

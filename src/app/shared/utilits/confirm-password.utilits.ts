import { AbstractControl } from "@angular/forms"

export function confirmPassValidation(g:AbstractControl){
    return g.get('password')?.value == g.get('rePassword')?.value ? null: {mismatch : true}
  }
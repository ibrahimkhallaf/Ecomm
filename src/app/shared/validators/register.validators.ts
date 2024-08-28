import { Validators } from "@angular/forms";

export const signUPVaalidator = {
    name:[Validators.required,Validators.minLength(2),Validators.maxLength(20)],
    email:[Validators.required,Validators.email],
    password:[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]
}
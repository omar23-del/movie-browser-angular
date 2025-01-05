import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showpassword : boolean = false
loginform : FormGroup = new FormGroup ({
  email: new FormControl("", [Validators.required, Validators.email]),
  password: new FormControl("", [
    Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Zء-ي])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9ء-ي!@#$%^&*(),.?":{}|<>]{6,30}$/
)
  ])
})

constructor(private router: Router) {}

submitloginform(form: FormGroup) {
if(form.valid) {
  this.router.navigate(['/movies/main-page']);}
}

dispalypassword() {
this.showpassword = !this.showpassword
}

}



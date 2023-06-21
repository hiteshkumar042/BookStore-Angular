import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hideLogInpwd = true;
  hideSignUpPwd = true;
  //Erorr hint for login
  emailError = "";
  passwordError = "";
  //Eror hint for signup
  nameError = "";
  emailSignError = "";
  passwordSignError = "";
  phoneError = ""
  //email and password
  LoginFormData!: FormGroup;
  SignupFormData!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
     private userService: UserService,
     private snackBar:MatSnackBar,
     private router:Router
    ) { }

  ngOnInit() {
    this.LoginFormData = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })

    this.SignupFormData = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.pattern("[a-zA-Z]+\\.?")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      phone: ["", [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]]
    })
  }
  //on click of Login button
  logInClick() {
    if (this.LoginFormData.valid) {
      this.userService.loginService(this.LoginFormData.value).subscribe((data: any) => {
        console.log(data);
        //to store the token in local storage
        localStorage.setItem('token', data.result.accessToken);
        //snackbar when account is logged in
        this.snackBar.open('Logged in succesfully', 'Ok', {
          duration: 3000
        });
        //Navigate to dashboard page
        this.router.navigateByUrl('/dashboard')
      })
    }
    else {
      this.emailError = "Invalid email";
      this.passwordError = "Invalid password";
      return;
    }
  }

  //on click of sign un button
  signupClick() {
    if (this.SignupFormData.valid) {
      this.userService.signupService(this.SignupFormData.value).subscribe(data => {
        console.log(data)
        this.snackBar.open('Account created succesfully', 'Ok', {
          duration: 3000
        });
      })

    }
    else {
      this.nameError = "Invalid full name";
      this.emailSignError = "Invalid email";
      this.passwordSignError = "Invalid password";
      this.phoneError = "Invalid mobile number"
      return;
    }
  }

}

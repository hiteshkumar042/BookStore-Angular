import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,RouterLink } from '@angular/router';
import { AdminService } from 'src/app/services/adminservices/admin.service';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isChecked=false;
  LogInStatus = "User Account"
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
     private router:Router,
     private adminService:AdminService
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
      if(this.isChecked==false){
        this.userService.loginService(this.LoginFormData.value).subscribe((data: any) => {
          console.log(data);
          //to store the token in local storage
          localStorage.setItem('token', data.result.accessToken);
          //Navigate to dashboard page
          this.router.navigateByUrl('/dashboard')
          //snackbar when account is logged in
          this.snackBar.open('User Log In succesfull', 'Ok', {
            duration: 3000
          });
          
        })
      }
      else{
       this.adminService.adminLoginService(this.LoginFormData.value).subscribe((result:any)=>{
        //to store the token in local storage
        localStorage.setItem('token', result.result.accessToken);
        //Navigate to dashboard page
        this.router.navigateByUrl('admin_dashboard')
        //snackbar when account is logged in
        this.snackBar.open('Admin Log in succesfull', 'Ok', {
          duration: 3000
        });
        
       })
      }
      
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
  changelogIn(){
    this.isChecked=!this.isChecked
    if(this.isChecked==false){
      this.LogInStatus="User Account"
    }
    else{
      this.LogInStatus="Admin Account"
    }
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username= 'praveen29'
  Password= ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }
  handleLogin() {
   // console.log(this.Username);
    if (this.Username === "praveen29" && this.Password === "dummy") {
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    } 
  }

}

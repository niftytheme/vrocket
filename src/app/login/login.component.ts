import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Input Verification
    $('#password-btn').on('click', function () {
      // toggle eye icon
      $('#password-btn i').toggleClass('fa-eye-slash');
      var inputField = $('#password-input');
      // get the attribute value
      var type = $(inputField).attr("type");
      // now test it's value
      if (type === 'password') {
        $(inputField).attr("type", "text");
      } else {
        $(inputField).attr("type", "password");
      }
    });
  }

  // Send to Sign Up Page
  sendToSignUpPage() {
    this.router.navigate(['signUp']);
    return false;
  }
  // Send to Forget Password Page
  sendToForgetPassword() {
    this.router.navigate(['forgetPassword']);
    return false;
  }

}

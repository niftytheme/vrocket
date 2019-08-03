import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

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

  sendToLoginPage() {
    this.router.navigate(['login']);
    return false;
  }

}

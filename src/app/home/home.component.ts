import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // ==== Features Button
		$('.features .btn-contain button').on('click', function () {
			$(this).text(function (i, text) {
				return text === "Less" ? "More" : "Less";
			});
		});
		// ----------------------------------------------------

		// ==== Hosting Section
		$('.hosting .host-taps li').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
			$('.host-item').hide();
			$($(this).data('show')).show();
			return false;
		});
    // ----------------------------------------------------

    // Sign Up Form
    $('.sign-up-form input').on('focus', function () {
      $(this).parents('.input-group').addClass('visited');
    });
    $('.sign-up-form input').on('focusout', function () {
      if ($(this).val() !== '') {
        $(this).parents('.input-group').addClass('visited');
      } else {
        $(this).parents('.input-group').removeClass('visited');
      }
    });
  }

  // Send to About Us Page
  sendToAboutUs() {
    this.router.navigate(['aboutUs']);
    return false;
  }

}

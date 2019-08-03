import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VRocket-app';

  ngOnInit() {
    // ---- BEGIN: Navbar
    // Scroll page to top when click on nav item
    $('.navbar-link').on('click', function () {
      $('html').scrollTop(0);
    });
    // Toggle Nav On Medium and Small devices
    $("#toggle-nav").on('click', function () {
      if ($(window).width() < 992) {
        $(this).toggleClass('clicked');
        $('nav').toggleClass('open');
        $('body').toggleClass('nav-open');
        // Remove nav open class in small devices
        $('.navbar-link').on('click', function () {
          $('#toggle-nav').removeClass('clicked');
          $('nav').removeClass('open');
          $('body').removeClass('nav-open');
        });
      } else {
        $(this).removeClass('clicked');
        $('nav').removeClass('open');
        $('body').removeClass('nav-open');
      }
    });
    $(window).on('resize', function () {
      if ($(window).width() < 991) {
        // Remove Nav Class
        $('#toggle-nav').removeClass('clicked');
        $('nav').removeClass('open');
        $('body').removeClass('nav-open');
      } else {
        return false;
      }
    });

    // Show DropDown Menu in Medium & Small Devices
    $('.nav-content ul li.dropdown-li').on('click', function () {
      if ($(window).width() < 987) {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('ol').slideDown().parents('.dropdown-li').siblings().find('ol').slideUp();
      }
    });
    $(document).mouseup(function (e) {
      if ($(window).width() < 987) {
        var dropdownLi = $(".nav-content ul li.dropdown-li");
        // if the target of the click isn't the container nor a descendant of the container
        if (!dropdownLi.is(e.target) && dropdownLi.has(e.target).length === 0) {
          dropdownLi.removeClass('active');
          dropdownLi.find('ol').slideUp();
        } else {
          return false;
        }
      }
    });
    $(window).on('resize', function () {
      // Collapse Dropdown Menu
      if ($(window).width() > 986.98) {
        $('.nav-content ul li.dropdown-li ol').hide();
        setTimeout(function() {
          $('.nav-content ul li.dropdown-li ol').show();
        }, 0);
      } else {
        setTimeout(function() {
          $('.nav-content ul li.dropdown-li ol').slideUp();
        }, 0);
      }
    });
    // ----------------------------------------------------------

    // ---- BEGIN: Footer
    // Scroll to top
    $('footer li a').on('click', function () {
      $('html').scrollTop(0);
    });
    // Language Menu
    $('#lang-btn').on('click', function () {
      $('footer .copyright .language-menu .menu').toggleClass('show');
    });
    $(document).mouseup(function (e) {
      var container = $("footer .copyright .language-menu .menu");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
      }
    });
  }
}

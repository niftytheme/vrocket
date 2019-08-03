import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-vps-hosting',
  templateUrl: './vps-hosting.component.html',
  styleUrls: ['./vps-hosting.component.css']
})
export class VpsHostingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Section 4
    // Show the content
    $('.section-4 .contain .list li').on('click', function () {
      $('.section-4 .contain .list li').removeClass('selected');
      $(this).addClass('selected');
      $($(this).data('show')).fadeIn().siblings().hide();
    });
  }

}

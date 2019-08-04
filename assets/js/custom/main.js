/*global window, jQuery */

(function ($) {

  'use strict';

  // ==== Loading Page
  $(window).on('load', function () {
    $('body .loading').fadeOut(1000);
    $('html').css('overflow-y', 'visible');
  });
  // ---------------------------------------------------------------

}(jQuery));

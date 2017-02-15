$(document).ready(function() {
  // Navigation
  // $(window).bind('load scroll', function(){
  //    var y = $(window).scrollTop();
  //    if (y <= 15) {
  //      $('#lt-navigation nav').addClass('lt-no-background');
  //    } else if (y > 15) {
  //      $('#lt-navigation nav').removeClass('lt-no-background');
  //    }
  // });
  $('.lt-mobile-toggle').sideNav();

  // mobilnav button
  $(".button-collapse").sideNav();

  // Tabs
  $('.lt-tabs').tabs();

	// collapsible
   $('.collapsible').collapsible();

  // Modal
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

  // Select
  $('select').material_select();

  // DatePicker
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
  });

	// dropdown button
  $('.dropdown-button').dropdown({
  		inDuration: 300,
  		outDuration: 225,
  		constrainWidth: true, // Does not change width of dropdown to that of the activator
  		hover: true, // Activate on hover
  		gutter: 0, // Spacing from edge
  		belowOrigin: true, // Displays dropdown below the button
  		alignment: 'left', // Displays dropdown with edge aligned to the left of button
  		stopPropagation: false // Stops event propagation
  	 }
    );

  // Slider
  // $('.lt-slider').slider({full_width: true});
  // $(window).resize(function() {
  //     $('.lt-slider').height($(window).height() + 15).css('position', 'relative');
  // });
  // $(window).trigger('resize');

  // Parallax
  // $('.lt-parallax').parallax();

  // Owl Carousel
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     items: 1,
  //     center: true
  // });

// WOW animate
  wow = new WOW(
  	{
  	boxClass:     'wow',      // default
  	animateClass: 'animated', // default
  	offset:       0,          // default
  	mobile:       true,       // default
  	live:         true        // default
   }
);
   wow.init();

});

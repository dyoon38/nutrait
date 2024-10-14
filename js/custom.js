(function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });


    $(function(){
      var url = window.location.pathname;
      var urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
        // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.nav-item a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });
    });

    var activeURL = window.location.pathname;
    // $('.nav-item a[href="'+activeURL+'"]').parent('li').addClass('active');
    // console.log(activeURL);


    // MENU ACTIVE
    // $('.nav-item a').click(function() {
    //   if ( $(this.href) === activeURL ) {
    //       $(this).parent('li').addClass('active')
    //   }
    //   else {
    //       $(this).parent('li').removeClass('active')
    //   }
    // });

    // MENU ACTIVE
    // $('.nav-item a').click(function() {
    //   if ( $(this).hasClass('active') ) {
    //       $(this).removeClass('active')
    //   }
    //   else {
    //       $(this).addClass('active')
    //   }
    // });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });

    
  })(window.jQuery);

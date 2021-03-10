jQuery(function ($) {


  function onScroll(event) {
    //add class active when click on navbar item
    var scrollPosition = $(document).scrollTop();
    $('.navbar-collapse .nav-item a[href^="#"').each(function () {
      console.log($(this).attr('href'));
      var refElement = $($(this).attr("href"));
      if (refElement.length && refElement.position().top <= scrollPosition) {
        $('.navbar-collapse .nav-item ').removeClass("active");
        $(this).parent().addClass("active");
      }
      else {
        $(this).removeClass("active");
      }

    });
  }
  $(document).on("scroll", onScroll);
  //animate to section when click
  $('.navbar-collapse ul li a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
    $('.navbar-collapse.collapse.in').removeClass('in');
    return false;
  });

  //close mobile navbar when chooe one of items
  $(".navbar .nav-link").click(function () {
    $(".collapse").removeClass("show");
  });
  //datePicker 
    $( "#datepicker" ).datepicker();


});


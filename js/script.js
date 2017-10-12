$(document).ready(function () {

    if ($('body.dnnEditState').length == 0) {
        $('head link[href*="/Resources/Shared/stylesheets/dnndefault/7.0.0/default.css"]').remove();
        $('head link[href*="/Resources/Shared/stylesheets/dnndefault/7.0.0/default.css"]').remove();
    }
    //show on hover for coaches

    $('.collapse.navbar-collapse ul>li').on('mouseover', function (e) {
        if ($(this).find('li').length > 0) {
            $(this).addClass('open');
        }
    });

    $('.collapse.navbar-collapse ul>li').on('mouseleave', function (e) {
        if ($(this).find('li').length > 0) {
            $(this).removeClass('open');
        }
    });

    $(".go-next-section").click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $("#clinic").offset().top - 90
        }, 1500);
    });
    $(".setDate").text(new Date().getFullYear());
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $(window).load(function () {
        if ($(window).scrollTop() > 0) {
            $("ul.wow").removeAttr("style");
            $("li.wow").removeAttr("style");
        }
    });

    var owl = $('.owl-carousel-partners');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    var speaker = $('.owl-carousel-speaker');
    speaker.owlCarousel({
        items: 3,
        loop: true,
        margin: 150,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#remove-coach').click(function () {
        $('.removemodal').css({ display: 'block' });
    });
    $('#close-modal').click(function () {
        $('.removemodal').css({ display: 'none' });
    });
    $('#close-modal-buttom').click(function () {
        $('.removemodal').css({ display: 'none' });
    });
    /* Dynamic Schedule Height Adjustment */
    /* set height on page load for active item */
    $('.carousel-inner .active').each(function() {
      adj_height = 0;
      $(this).children().children().each(function() {  
        adj_height = adj_height + $(this).innerHeight();
      });
      $(this).css("height", adj_height + "px");
    });
    /* set height on items that become active from click event */
    $('#carousel-sched li').click(function() {
		setTimeout(function() {
		  $('.carousel-inner .active').each(function() {
			adj_height = 0;
			$(this).children().children().each(function() {  
			  adj_height = adj_height + $(this).innerHeight();
			});
			$(this).css("height", adj_height + "px");
		  });},
	  1000);
    });
});
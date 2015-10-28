jQuery(document).ready(function($){
  
  /* Navigation */
  
	var contentSections = $('.section-content'),
		navigationItems = $('#vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .nav-trigger').on('click', function(){
    	$('.touch #vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #vertical-nav a').on('click', function(){
    	$('.touch #vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
  
  /* Resume Navigation - on click, show the content with the same index and hide the siblings. Change the opacity of the selected navigation to 1 and set the siblings to 0.5. */
  $('.resume-content .content').hide();

  $('#resume-navigation li').on('click',function(e) {
    e.preventDefault();
    var resumeContent = $(this).index();
    $('.content').eq(resumeContent).fadeToggle(600).show().siblings().hide();
    $(this).css('opacity', 1).siblings().css('opacity', .5);
  });
  
});
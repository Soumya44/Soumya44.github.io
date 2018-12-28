$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart touchend', function() {
    
    if (!active1) $(this).find('.test1').css({'transform': 'translate(0px,-125px)'});
    else $(this).find('.test1').css({'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'transform': 'translate(-60px,-105px)'});
    else $(this).find('.test2').css({'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'transform': 'translate(-105px,-60px)'});
    else $(this).find('.test3').css({'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'transform': 'translate(-125px,0px)'});
    else $(this).find('.test4').css({'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

$('.tab-link').click( function() {
	
	var tabID = $(this).attr('data-tab');
	
	$(this).addClass('active').siblings().removeClass('active');
	
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(document).on('scroll', function(){
    $('.navbar-collapse').collapse('hide');
});
